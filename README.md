# Vaak Landing Page 🕉️

A beautiful, responsive landing page for Vaak - the spiritual wellness app that transforms daily Hukamnama from Harmandir Sahib into personalized affirmations.

## 🎯 Purpose

This landing page serves two key goals:
1. **Beta User Acquisition**: Capture emails for your 50-100 beta testers
2. **SISFS Pitch Support**: Professional web presence to strengthen your funding application

## 📁 Files Included

- `index.html` - Main landing page structure
- `styles.css` - Complete styling with Golden Temple-inspired design
- `script.js` - Interactive functionality and form handling
- `README.md` - This file

## 🚀 Quick Start with Replit

### Step 1: Set Up Your Replit Project

1. Go to [Replit.com](https://replit.com)
2. Create a new Repl
3. Choose "HTML, CSS, JS" template
4. Name it "vaak-landing" or "vaak-website"

### Step 2: Upload Files

1. Delete the default files in Replit
2. Upload all three files from this package:
   - `index.html`
   - `styles.css`
   - `script.js`

### Step 3: Configure Beta Signup Form

Choose one of these options to receive beta signups:

#### Option 1: FormSubmit.co (Recommended - Easiest)

1. Open `script.js`
2. Find line 75: `YOUR_EMAIL@gmail.com`
3. Replace with your actual email address
4. That's it! Signups will be emailed to you

```javascript
// Replace this:
await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@gmail.com', {

// With your email:
await fetch('https://formsubmit.co/ajax/ishleen@vaak.app', {
```

#### Option 2: Google Sheets Integration

1. Create a new Google Sheet for beta signups
2. Go to Extensions → Apps Script
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.platform
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as Web App → Anyone can access
5. Copy the Web App URL
6. Update `script.js` line 95 with your URL

#### Option 3: Direct Backend Integration

If you want to store signups in your Vaak backend database:

1. Add endpoint to your backend server (`server.js`):

```javascript
// Add to your server.js
app.post('/api/v1/beta-signups', async (req, res) => {
  const { name, email, platform, timestamp } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO beta_signups (name, email, platform, created_at) VALUES ($1, $2, $3, $4)',
      [name, email, platform, timestamp]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

2. Create table in PostgreSQL:

```sql
CREATE TABLE beta_signups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  platform VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. Update `script.js` to use backend option (uncomment lines 109-124)

### Step 4: Test Locally

1. Click "Run" in Replit
2. Your page should open in the preview pane
3. Test the form by submitting a test signup
4. Verify you receive the email/data

### Step 5: Claim Your Free .com Domain

With Replit Core subscription (check the Black Friday offer):

1. Go to your Repl settings
2. Find "Custom Domain" section
3. Search for available `.com` domains
4. Register your free domain (e.g., `vaak.com` or `getvak.com`)
5. Replit will automatically configure SSL and hosting

### Alternative: Use Replit's Free Subdomain

Without the paid plan:
- Your site will be at: `your-repl-name.your-username.repl.co`
- Still professional and functional for beta testing
- Free SSL certificate included

## 🎨 Customization Guide

### Update Your Email Address

In `index.html`, find:
```html
<a href="mailto:contact@vaak.app">Contact</a>
```
Replace with your actual email.

### Change Colors (Optional)

In `styles.css`, modify the CSS variables at the top:

```css
:root {
    --sacred-gold: #D4AF37;     /* Primary accent color */
    --serene-blue: #4A90E2;     /* Secondary color */
    --dawn-orange: #FF9F67;     /* Morning accent */
    --twilight-purple: #8B7AB8; /* Evening accent */
}
```

### Add App Store Links (When Ready)

In `index.html`, update the hero CTA section:

```html
<div class="hero-cta">
    <a href="https://apps.apple.com/your-app" class="btn btn-primary btn-large">
        Download on iOS
    </a>
    <a href="https://play.google.com/your-app" class="btn btn-secondary btn-large">
        Get it on Android
    </a>
</div>
```

### Add Screenshots

1. Take screenshots of your mobile app
2. Upload images to Replit
3. Replace the phone mockup in `index.html`:

```html
<div class="phone-mockup">
    <img src="your-screenshot.png" alt="Vaak App Screenshot">
</div>
```

### Add Social Media Links

In `index.html` footer section:

```html
<div class="footer-column">
    <h4>Connect</h4>
    <a href="https://twitter.com/vaak" target="_blank">Twitter</a>
    <a href="https://instagram.com/vaak" target="_blank">Instagram</a>
    <a href="https://facebook.com/vaak" target="_blank">Facebook</a>
</div>
```

## 📊 Analytics (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Troubleshooting

### Form Not Submitting

1. Check browser console for errors (F12 → Console)
2. Verify email address is correct in `script.js`
3. Check FormSubmit.co spam folder for first submission

### Styles Not Loading

1. Ensure `styles.css` is in the same directory as `index.html`
2. Check file name spelling (case-sensitive)
3. Clear browser cache and refresh

### Scripts Not Working

1. Ensure `script.js` is in the same directory
2. Check browser console for JavaScript errors
3. Verify all functions are properly defined

## 📱 Mobile Responsiveness

The landing page is fully responsive and tested on:
- ✅ Desktop (1920px, 1440px, 1280px)
- ✅ Tablets (768px, 1024px)
- ✅ Mobile phones (375px, 414px, 390px)

## 🎯 SISFS Application Support

This landing page provides everything needed for your funding application:

### Screenshots for Application
1. Open the page in different browsers
2. Use browser DevTools (F12) for mobile views
3. Take screenshots of:
   - Hero section with phone mockup
   - Features grid
   - Beta signup form
   - Mission section

### Evidence of Traction
- Beta signup count demonstrates user interest
- Professional web presence shows commitment
- Technical sophistication evident in design

### Pitch Deck Integration
Use screenshots from these sections:
- **Problem/Solution** slide: Use PS section
- **Product** slides: Use phone mockup and features
- **Market** slides: Use mission section and stats
- **Team** slide: Use mission/about section

## 🚀 Going Live Checklist

Before making your site public:

- [ ] Replace `YOUR_EMAIL` in script.js
- [ ] Test form submission thoroughly
- [ ] Update all placeholder text
- [ ] Add your actual contact email
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Verify API status link works
- [ ] Add Google Analytics (optional)
- [ ] Test in different browsers
- [ ] Check loading speed
- [ ] Spell-check all content

## 📈 Next Steps After Launch

1. **Share the Link**
   - Post in Sikh community forums
   - Share on social media
   - Email to friends and family
   - Post in relevant subreddits (r/Sikh)

2. **Track Metrics**
   - Monitor beta signups
   - Check Google Analytics
   - Note which platforms people prefer
   - Gather feedback from visitors

3. **Iterate**
   - Add testimonials as you get them
   - Update stats as they grow
   - Add app store badges when ready
   - Include press mentions

## 🆘 Support

### Questions?
- Email: contact@vaak.app (update with your email)
- GitHub: Create issue in your repo

### Resources
- [Replit Documentation](https://docs.replit.com)
- [FormSubmit.co Guide](https://formsubmit.co)
- [Google Sheets Apps Script](https://developers.google.com/apps-script)

## 📄 License

This landing page is part of the Vaak project. All rights reserved.

---

Built with 🙏 for the global Sikh community

**Harmandir Sahib Attribution**: All Hukamnama content sourced from Harmandir Sahib (Golden Temple)
