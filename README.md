# Blaire

Blaire is a fork of the [Dope theme](https://github.com/TryGhost/Dope), upgraded and enhanced, for the [Ghost CMS](https://github.com/TryGhost/Ghost). You can see this theme in use on [my photography website](https://kennethballard.photo). Much of the enhancements are about using the latest versions of various components and ending reliance on the "shared-theme-assets" module.

I will be keeping this in sync with the Dope theme for the most part, but there will come a point where I decide to deviate heavily from Dope's styling. Such as adding a "dark mode" or making this entirely a dark theme, along with changing up fonts and colors. Since this is the theme I use on my photography website, it'll all depend on how I want to adjust the look and feel there.

## Installing

Just download the latest .zip file from the Releases and upload it into your Ghost instance.

## Options

I've kept the bulk of Dope's look and feel while making enhancements under the hood and adding configuration options so you can tailor the theme's look or behavior to your liking.

### Use pagination (default: false)

I have a lot of posts under one specific tag - "[street portraits](https://kennethballard.photo/tag/street-portraits/)". So the continuous "load more" in Dope and other themes isn't viable. So I added pagination into the tag feed. It's Off by default to preserve the original behavior, so turn it On in the admin panel if you want that.

### Proportional images on feeds (default: false)

Cropping down featured images to 500x312 on the tag and author feeds is one frustration I definitely wanted to tackle. Since the site where I'm using this is a photography website, I want to ensure the featured image is displayed with its proper portions instead of it being cropped down.

### Show all tags (default: false)

The Dope theme is programmed to only show the primary tag on a post, but you may want to show all tags for a post. In my use case, having all tags visible is better.

### Show read time (default: true)

In my  use case, the read time is worthless, so included is the option to turn it off.

### Date prefix (default: empty)

In another custom theme I'm writing, I prefix a post's publication date with "Filed on". Here, I decided to make that configurable so you can decide whether you want to have text before the date. For example, on my photography website, I prefix the dates with "Shot on:".

### Tag prefix (default: empty)

Similar to the "date prefix", except for specifying a prefix to display before the tags on a post.

### Disable lightbox for single images (default: false)

Only one image is posted on most of the street portrait posts on my photography website, and I think it's a waste to display the lightbox for those images. But you might think different which is why the code that determines that is surrounded by this condition and Off by default.

### Tags or pages (default: tags)

The front page relying on tags only was the first thing I changed, since I wanted to use this for a business website. So I added the option of listing pages instead of tags, with that being configurable through the admin panel. "Tags" is the default out-of-the-box to give the same behavior as Dope.

Switching it over to "pages", again gives more control over how your site is presented. Only featured pages, though, will be displayed, sorted by publication date oldest to newest, so manipulate those dates to change the order in which the pages are displayed. You can also tag a page with "#_no-excerpt" if you don't want the page's excerpt to be displayed in the slider - e.g., a page for a contact form.

## Features and enhancements

### Dark mode

This isn't because "dark mode is all the rage". I wrote this theme for my photography website, and photos always look better, stand out better on a dark background. I also prefer dark mode themes, honestly.

By default this will rely on browser detection, but can be forced by setting the "Force dark mode" option to On in the theme customization panel.

### Galleries on mobile

That galleries try to display "normally" on mobile has always been one of my annoyances. And when designing a theme for a photography website, this wasn't acceptable. So I decided to make it so galleries display vertically on mobile browsers. Sure, you could still scroll through the photos using the lightbox, but having it all display vertically to begin with is better, in my opinion.

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

### Heavier reliance on partials

Dope relies on a couple monolithic CSS and JS files. Which is great when everything is lightweight or you're making a minimalist theme. But it also means you can't control when JavaScript modules or CSS sheets are loaded.

To this end, I broke out almost all of the "main.js" into "partials" with scope checking. This allows for a smaller memory footprint and the implementation of features such as allowing pagination to be configurable. There is still a "monolith" CSS file since `screen.css` pulls in *everything*, so that still need to be broken out with scope checking around what CSS is loaded where.

But there is far more context awareness in loading JavaScript modules, meaning you don't have several components all perusing the DOM trying to decide if it has anything to do - e.g., the slider code trying to initialize while looking at a post, or the lightbox trying to initialize on the index page. One of the main principles of code performance is not running code where it isn't necessary.

## Future plans

(Side note: remembering to update this README if these happen.)

### Slider customizations via admin panel

Also planned is to implement more of the slider's options in the admin panel. Things like "autoplay", "rewind", etc. Feel free to open an issue if you have a specific option you think should be configurable via the admin panel.

### Break out screen.css into partials

Self explanatory. This is about not loading CSS where it isn't relevant.

## Copyright & License

Copyright &copy; 2024 by Kenneth Ballard. Derived from the "Dope" theme, copyright &copy; 2013-2024 by the Ghost Foundation.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The author of this script is not affiliated with the [Ghost Foundation](https://ghost.org/) in any way.
