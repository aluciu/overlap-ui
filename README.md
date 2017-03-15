![ScreenShot](https://68.media.tumblr.com/a1ef08d7e8b71d96bb60531c522f712d/tumblr_omulzqHCRY1qzqypfo1_1280.png)

## Overlap UI Kit

Responsive HTML for [Overlap UI Kit](https://www.behance.net/gallery/37272253/Overlap-UI-Kit). Multiple page types with different elements.

### Installation

If you need to modify the code then you need to install gulp and all dependencies with `yarn install`


### Watch and Live Reload

Type `gulp` or `gulp watch` in terminal to watch you modifications in real-time.

All sources are located in `./src` folder.


### Javascript

All javascript files are located in `./js` folder.

+ `scripts.js` is the file where you can modify the Javascript for your needs
+ `[vendor].min.js` is the Javascript library from different vendors. This files are intalled with `npm` and managed by `gulp`, so you don't need to touch this files.


### Image optimization

You can put the images in `./src/images` folder to optimize them. You can also run the task manually `gulp imagemin`.


### Icons

Use `gulp icons` to generate a sprite with all icons. You can add more icons in `./src/icons`.

To use it in HTML follow the next example:

```html
<a href="#" class="button">
    <svg class="svg-icn">
        <use xlink:href="img/icons.svg#search"/>
    </svg>
    Search
</a>
```


### Floating label for inputs

Beside Foundation standard inputs you can use a float label for inputs

```html
<div class="float-label">
  <input type="email" id="email" class="float-input">
  <label for="email">Email:</label>
</div>
```


### Zurb Foundation

Use `./src/scss/_settings.scss` to adjust the settings for Foundation. In `styles.scss` you must have these two lines at the beginning:
```scss
@import "settings";
@import "foundation";
```


## Links
+ [Demo](http://artlogo.ro/ironman/overlap-ui/)
+ Designer: [Vlad Cristea](https://www.behance.net/gallery/37272253/Overlap-UI-Kit)
+ [Zurb Foundation](http://foundation.zurb.com/sites/docs/)
+ [Slick Carousel](http://kenwheeler.github.io/slick/)
