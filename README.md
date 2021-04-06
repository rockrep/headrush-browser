# headrush-browser
Visual Browser for Headrush Pedalboard™ Rigs and Blocks

This is an open-source project that is not affiliated with Headrushfx.com.  Headrushfx.com is not responsible for the functionality of this software and they may change their firmware in future releases that could break this browser at their sole disgression.  

Community PRs are welcome.  Please fork the project and submit a PR. 

You are free to use this software, however please attribute appropriately.

## why

Headrush Pedalboard does not have a librarian/editor and it can be difficult to view all of your patch settings on the device itself without a lot of paging and scrolling.

This provides an easy way to visualize all your rigs and block settings in a convenient browser.   It is READ-ONLY.  No editing or librarian features are provided as that would require knowledge of the Headrush Pedalboard USB-sync protocol, and that should be something provided by the manufacturer if they choose.

## how

- install nvm
- install node
- install yarn
- clone this project
- copy your rigs and blocks folder to project root
- run yarn start
- view in your browser at http://localhost:3000

## compatibility

This software is compatible with Headrush Pedalboard™ Firmware version 2.3.0.   No guarantees it will work with other versions as Headrush may change the format of it's data schema at their disgression.  No guarantees it will work with older versions of the firmware.

It may also work with Headrush Gigboard™ Firmware version 2.3.0 but I have not tested that as I do not own that device.
