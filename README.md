# Blaire

Blaire is a fork of the [Dope theme](https://github.com/TryGhost/Dope), upgraded and enhanced, for the [Ghost CMS](https://github.com/TryGhost/Ghost). You can see this theme in use on [my photography website](https://kennethballard.photo). Much of the enhancements are about using the latest versions of various components and ending reliance on the "shared-theme-assets" module.

I will be keeping this in sync with the Dope theme for the most part, but there will likely come a point where I decide to deviate heavily from Dope's styling. Such as adding a "dark mode" or making this entirely a dark theme, along with changing up fonts and colors. Since this is the theme I use on my photography website, it'll all depend on how I want to adjust the look and feel there.

## Installing

Just download the .zip file from the Releases and upload it into your Ghost instance.

## New options and features

I've kept Dope's look and feel while making enhancements under the hood.

### Pages or tags

The front page relying on tags only was the first thing I changed, since I wanted to use this for a business website - or at least a website that'll *eventually* become a business website. This required more control over what was displayed on the front page. So I added the option of listing pages instead of tags, with that being configurable through the admin panel. "Tags" is the default out-of-the-box to give the same behavior as Dope.

Switching it over to "pages", again gives more control over how your site is presented. Only featured pages, though, will be displayed, sorted by publication date oldest to newest, so manipulate those dates to change the order in which the pages are displayed. You can also tag a page with "#_no-excerpt" if you don't want the page's excerpt to be displayed in the slider - e.g., a page for a contact form.

#### ... or custom?

A third option I'd like to implement would allow defining a list of tags or pages and the order in which they'll be displayed in the slider. Something like this:

    #tag-slug, page-slug, #tag-slug, #tag-slug, page-slug, page-slug, etc...

This would be slower - since it would require an individual query for each entry in the list - but would, again, allow for a customizable front-end without everything having to be _only_ tags or pages (or posts).

And it also requires custom handlebar helpers (specifically several of the string helpers from [this project](https://github.com/helpers/handlebars-helpers)). That adds a whole new layer of complication and excludes those on hosted Ghost instances like [Ghost Pro](https://ghost.org/pricing/) from being able to use this theme. Indeed the requirement of stability with Ghost Pro is likely why more custom helpers haven't been introduced officially into Ghost.

### Pagination on tag pages

I have a lot of posts under one specific tag - "[street portraits](https://kennethballard.photo/tag/street-portraits/)". So the continuous "load more" feed in Dope (and plenty of other themes) isn't viable. So I added pagination into the tag feed. It's Off by default to preserve the original behavior, so turn it On in the admin panel if you want that.

### Galleries on mobile

That galleries try to display "normally" on mobile has always been one of my annoyances. And when designing a theme for a photography website, this wasn't acceptable. So I decided to make it so galleries display vertically on mobile browsers. Sure, you could still scroll through the photos using the lightbox, but having it all display vertically to begin with is better, in my opinion.

## Replacements

### Owl Carousel -> [Tiny Slider 2](https://github.com/ganlanyuan/tiny-slider)

Why swap out Owl Carousel? The main reason is I noticed some issues with using it on mobile, so I went looking to see if a newer version was available in case what was distributed with Dope was out of date. And that's when I discovered...

**It's dead, Jim.** The [last commit](https://github.com/OwlCarousel2/OwlCarousel2/commit/4eedccac4ea061931162a86e3f268332c16a1ad0) was on July 31, 2019, which updated the README to say the project is dead and recommending switching over to Tiny Slider 2. And sure, we can reasonably say that Tiny Slider 2 is likely also dead given the [last commit](https://github.com/ganlanyuan/tiny-slider/commit/4d709735c417c2483e77a22d017fc1b18c04f0d4) was in November 2021. But...

**Tiny Slider 2 works better on mobile.** Owl Carousel also has some issues on mobile browsers. Scrolling across works reasonably well, but tapping to be directed to the tag page was... umm... touchy. Tiny Slider 2 just works a lot better on all fronts.

Future plans include adding more control over Tiny Slider to the theme options. At the moment, the only configurable option is enabling/disabling the loop function - default: Off.

### Photoswipe -> [Fullscreen Lightbox](https://fslightbox.com/)

Dope relies on an outdated version of [Photoswipe](https://photoswipe.com/) for displaying images and the image lightbox. It's actually in the @tryghost/shared-theme-assets node package. I've used Fullscreen Lightbox in playing around with writing themes for Ghost, so I know it to be a bit more lightweight than Photoswipe while still providing much the same functionality.

### Other upgrades

* imagesLoaded - Latest pulled from [Github repo](https://github.com/desandro/imagesloaded)
* jQuery - Upgraded to 3.7.1, and there'll be an emphasis on keeping it updated for performance and security
* jarallax - Latest pulled from [Github repo](https://github.com/nk-o/jarallax/)
* reframe - Latest pulled from [Github repo](https://github.com/dollarshaveclub/reframe.js)

## Code structure changes

### Heavier reliance on partials

Dope relies on a couple monolithic CSS and JS files. Which is great when everything is lightweight or you're making a minimalist theme. But it also means you can't control when JavaScript modules or CSS sheets are loaded.

To this end, I broke out almost all of the "main.js" into "partials" with scope checking. This allows for a smaller memory footprint and the implementation of features such as allowing pagination to be configurable. There is still a "monolith" CSS file since `screen.css` pulls in *everything*, so that still need to be broken out with scope checking around what CSS is loaded where.

But there is far more context awareness in loading JavaScript modules, meaning you don't have several components all perusing the DOM trying to decide if it has anything to do - e.g., the slider code trying to initialize while looking at a post, or the lightbox trying to initialize on the index page. One of the main principles of code performance is not running code where it isn't necessary.

### No more Gulp

Gulp was being used to build the aforementioned monolithic CSS and JS files. And since I've eliminated those, as described above, to have a heavier reliance on partials, Gulp isn't being used to build this theme anymore. Instead... everything just gets zipped up for release.

## Future plans

(Side note: remembering to update this README if these happen.)

### Dark mode

This isn't merely because "dark mode is all the rage". I wrote this theme for my photography website, and photos always look better, stand out better on a dark background. So a dark mode will likely be something I pursue. I also prefer dark mode themes, honestly.

### Slider customizations via admin panel

Also planned is to implement more of the slider's options in the admin panel. Things like "autoplay", "rewind", etc. Feel free to open an issue if you have a specific option you think should be configurable via the admin panel.

### Finishing breaking out main.js

Pretty self explanatory here. Same with...

### Break out screen.css into partials

Again, self explanatory. Again this is about not loading CSS where it isn't relevant.

## Copyright & License

Dope theme - &copy; 2013-2024 Ghost Foundation - Released under the [MIT license](LICENSE).
Blaire theme - &copy; 2024 Kenneth Ballard - Released under the [MIT license](LICENSE).
