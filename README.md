<img src="https://user-images.githubusercontent.com/45979758/179194036-fe27cd10-f509-427d-a538-7b9a994bd88b.svg" height="25px"/>&nbsp;&nbsp;</br>
Not recommended for production


# Escape
Help domestic abuse victims discreetly escape support websites ✊👣

### How it works
#### 1. Masking
Escape displays a Google look-alike as it readies for redirection.

<img src="https://user-images.githubusercontent.com/45979758/180649239-30cbf28f-e9bd-472e-8f50-fc9b4dc22a13.gif"  width=40%>

Both the icon and Title in the toolbar also change to represent Google

<img src="https://user-images.githubusercontent.com/45979758/180649353-aaba46f9-a2db-4f4c-983c-decc3e552439.png"  width=20%>

#### 2. Erasure

- The previous site it erased from the browsers history
- Pressing the back button will not take you back

#### 3. Redirection

- The browser is securely redirected to Google.com
- Thanks to the Google look-alike, this process is unrecognisable.


### Features
- Leave no trace in browser history
- Hidden in milliseconds
- One-script installation
- Lightweight (≈50kb)
- Meta tag masking (favicon and title) 
- Performant and non-intrusive

### To Do's
- [x] Basic functionality
- [x] Mock Google home-page
- [x] Hiding popup and storing it in `sessionStorage`
- [ ] Accessibility check
- [ ] fix: Escape key usage. `location.replace` not working intermittently

## How to use
###  Dev
`pnpm run start`
### Adding to your site
Simply add this script at the end of the `<body>` tag or by using your hosting provider's snippet injection:
<br> `<script src="https://vitals.moonface.digital/escape"></script>`

