
# Personal Website
This is my design portolio. The live version is at www.abizar.me. It's built using Grunt, SASS, and Autoprefixer.

### Notes to self: 
To push live changes from dist folder, use: 
```
git subtree push --prefix dist origin gh-pages
``` 

When above gives errors, use:
``` 
git push origin `git subtree split --prefix dist master`:gh-pages --force
``` 
