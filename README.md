
## Usage
First, install `yllgulp-remove-spaces-line` as a devDependency:
```
npm install yllgulp-remove-spaces-line --save-dev
```
Then add it to the `gulpfile.js`:
```
var yllgulp = require('yllgulp-remove-spaces-line');

gulp.task('test', function () {
    gulp.src('./demo/index.html')
        .pipe(yllgulp())
        .pipe(gulp.dest('dist')); 
})
```


---
[MIT](https://opensource.org/licenses/MIT)

Copyright © 2020 yll1024335892@163.com