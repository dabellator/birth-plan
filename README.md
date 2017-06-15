# BPG first steps

## Hi Travis

I added a few important files to the repo:
  - admin.html
  - index.html
  - client.js
  - ~~data.js~~

### `admin.html`
This is an introduction to what we need as an admin panel. You can upload new images, and then you can add meta data to them. Also, the view loads all current data on initialization. You'll find some variables that will show you what URLs to call in order to reach the different services.

**NOTE** these files use `fetch`, which only works in Chrome and possibly in Firefox.

When you implement the admin, the user should have the ability to add metadata when uploading an image. Also, instead of rendering all the forms along with the image, there should be an edit toggle. Look, you know how to build a dashboard, you've been doing it for months!

This file also includes some _sweet_ inline vanilla js. Try not to be jealous.

### `index.html`
This is where the magic happens. This is mostly the same file as before, but it pulls images from the back end, and has the ability to save and fetch. We'll need to work on the UI flow a lot more, but this is our first stab at having real persistent data!

As you discover new services that you are missing, let me know. I'll be trying to find missing needs as well.

### `client.js`
This is where most of the scripting happens. It'll be good to cruise through it if you have questions on how things are happening. Little to none of this will be duplicated in the production code.

### `data.js`
This has been removed, because all data is now being fetched from the _Back End_!
