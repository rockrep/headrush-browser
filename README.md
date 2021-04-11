# HeadRush Browser

Visual Browser for HeadRush® Pedalboard Rigs and Blocks

This is an open-source project that is not affiliated with inMusic Brands, Inc. or Avid Technology, Inc.

## disclaimer

Eleven® is a registered trademark of Avid Technology, Inc. HeadRush® is a registered trademark of inMusic Brands, Inc.
Avid Technology, Inc. and inMusic Brands, Inc. are not responsible for the functionality of this project in any way.

## why

HeadRush Pedalboard does not have a librarian/editor and it can be difficult to view all of your patch settings on the device itself without a lot of paging and scrolling.

This provides an easy way to visualize all your rigs and block settings in a convenient browser. It is READ-ONLY. No editing or librarian features are provided as that would require knowledge of the HeadRush Pedalboard USB-sync protocol, and that should be something provided by the manufacturer if they choose.

## contributing

Community PRs are welcome. Please fork the project and submit a PR.
You are free to use this software, however please attribute appropriately

## how

- install [nvm](https://github.com/nvm-sh/nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
- install node 
```bash
nvm install 15.14.0
```
- install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
```bash
npm install --global yarn
```
- download source code
  Either using Git
  - install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  ```bash
    git clone git@github.com:rockrep/headrush-browser.git
  ```
  or click on the Code button above and `Download ZIP`
- `cd headrush-browser`
- run `yarn debug`
- view in your browser at `http://localhost:3000`

## compatibility

This software is compatible with HeadRush® Pedalboard Firmware version 2.3.0. No guarantees it will work with other versions as the manufacturer may change the format of it's data schema at their disgression. No guarantees it will work with older versions of the firmware.

It may also work with HeadRush Gigboard Firmware version 2.3.0 but I have not tested that as I do not own that device.

## roadmap

To make life easier for non-tech savvy folks, would like to convert this to a stand-alone executable for MacOS, Windows, Linux
using `pkg` or `nexe`, but I haven't figured out how to get that to work yet.

Also would like to display a better way to layout non-serial routing for Rigs.
