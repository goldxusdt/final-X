# Requirements Document

## 1. Application Overview

### 1.1 Application Name

Gold X Usdt

### 1.2 Application Description

A mobile-optimized multi-level marketing (MLM) platform focused on Gold USDT investment, featuring automated ROI distribution, 15-level referral commission tracking (with performance-based unlocking mechanism), wallet management, secure payment processing, enhanced coupon code system with advanced redemption rules (supporting transaction type restrictions, plan-specific targeting, single-use enforcement per user with proper validation and expiration handling, real-time discount preview, bulk coupon generation, scheduled activation/deactivation for marketing campaigns, manual deletion functionality, auto-deletion upon usage limit or expiry with proper ROI wallet balance display, bulk deletion of used coupons, comprehensive analytics dashboard with user demographic insights and coupon type comparison displaying accurate metrics, automated tier-based and performance-based coupon generation, and coupon history tracking), investment and return calculator (with interactive animated charts via Recharts showing ROI growth trends and referral commission breakdown, and manual user input for Monthly ROI calculations in Elite Performance section), referral level calculator, team growth simulator in user dashboard (projecting network earnings across all 15 referral levels with multi-year projection charts), PDF export and email sharing of simulation results, network leader leaderboard on dashboard (ranking top members by unlocked referral levels), unified wealth building projection dashboard accessible from earnings analysis page (syncing personal investment calculator with team growth simulator), comprehensive admin control panel for managing user performance metrics and ROI configuration, advanced admin settings (SEO, branding, analytics, site configuration, social media URL configuration), SMTP credential management (with real-time backend propagation), TRC-20/BEP-20 auto-confirmation API configuration, professionally designed transactional email templates (registration OTP verification and password reset), calculator results export to PDF and email sharing, post-development code audit and quality assurance process, complete deployment configuration for Netlify, Vercel and other compatible platforms, Supabase native backend using PostgreSQL as primary database, complete backend documentation service (outputting all data, functions, tables, SQL definitions and export values in CSV file format), automated daily ROI distribution system using Supabase Edge Functions for investment plans with 24-hour timer automatic restart mechanism and ROI wallet balance update, downline analysis page, network analysis page integrated as dedicated tab within referral page (with functional tier breakdown displaying populated user details and correct data fetching), floating social share component on blog and events pages, dynamic social media URLs fetched from admin settings, multi-language toggle supporting English, Spanish, Arabic, Tamil, Hindi and French (auto-detecting language based on IP on first visit), automated OCR system on KYC document upload page with document lockdown after upload preventing changes, enhanced admin KYC management page (AI-extracted OCR text displayed side-by-side with uploaded documents, with KYC text data and document images export to PDF or Excel, admin manual KYC document upload for specific users with approval marking visible on user side, and dashboard section displaying user catalog with document types and verification statuses), comprehensive security hardening layer with protection against all CWE Top 25 vulnerabilities and extended CWE catalog threats, dedicated INR/USDT currency display subdomain page (displaying real-time market rates via Supabase Edge Function cron job), admin-side rate monitoring and alerts, enhanced user deposit process (with admin-confirmed fund transfer and coupon code application with correct discount calculation), automated platform rate update settings, browser push notifications for admin rate fluctuation alerts, security center with real-time refresh and enhanced auth security logs (including detailed geolocation data and device fingerprinting), enhanced admin audit log detail view (side-by-side JSON diff comparison), multi-language content support for dynamic sections (blog posts and investment plans) with database schema and API updates, locale-specific SEO metadata optimization, enhanced two-factor authentication system for admin accounts (supporting both Email OTP and Google Authenticator with user-selectable verification method), enhanced input sanitization and injection protection, HTTPS-only enforcement (with HTTP 301 redirect), frontend performance optimization, FAQ section with admin management system synchronized with homepage, systematic documentation upload failure troubleshooting and resolution, admin security log section tracking MFA events (enable, disable, recovery via backup codes, method selection), PDF export functionality for weekly security audit reports, security audit page, security center page and style guide step-by-step user guide documentation, comprehensive anti-hacking security framework (protecting against all major attack vectors including SQL injection, XSS, CSRF, SSRF, RCE, insecure deserialization, business logic vulnerabilities, API abuse, malicious file uploads, DoS attacks, dependency vulnerabilities, path traversal, command injection, buffer overflow, integer overflow, authentication bypass, authorization flaws, session management issues, cryptographic failures, information disclosure, race conditions, and all CWE Top 25 plus extended CWE catalog threats), advanced referral dashboard displaying 15-level referral network tree view and detailed commission statistics (with resolved Failed to Load error and functional data loading), network genealogy tree export as high-resolution image or PDF for team presentations, comprehensive transaction history page for users to track all deposits, withdrawals and ROI records in one place, complete Edge Function error handling mechanism (with comprehensive capture and friendly prompts for network errors, timeout errors, HTTP errors, response format errors, etc.), admin security dashboard (visualizing 2FA attempt distribution over the past 24 hours and potential brute force attacks), browser push notification system for website users (including automatic notifications for specific system events such as balance reaching threshold, ROI arrival, withdrawal status updates, and daily ROI payouts), enhanced Telegram notification system for routing administrative alerts to a designated Telegram account (with interactive functionality allowing administrators to directly reply to support tickets or approve withdrawal requests via Telegram), secure export feature for enhanced security audit logs supporting PDF, CSV and Excel formats with strict compliance and tamper-evident controls, notification recall functionality allowing administrators to cancel sent global notifications within a configurable time window, real-time notification preview for mobile and desktop devices on notification composition page, custom notification category management system for dynamic notification type organization and filtering, notification history and system logs CSV export functionality for auditing purposes, Telegram webhook verification tool for testing bot message reception, comprehensive investment plan management system with full CRUD operations, automated validation, lifecycle management, unique wallet address generation per plan, special fixed plan configuration, detailed analytics reports for admin dashboard showing plan performance, active investment volume and projected payouts, visible deposit fee and refund duration display, date-time based investment duration tracking with automatic plan deletion upon expiration and transfer to investment history, automatic days and hours remaining calculation when editing investment plans based on chosen expiration date, user dashboard refund countdown timer showing remaining time based on plan duration and deposit timestamp, user dashboard active plans with automatic Next Payout timer restart and immediate ROI credit upon cycle completion, bonus reward withdrawal countdown timer, enhanced admin panel with plan name filtering for deposits and withdrawals, centralized pending actions page, corrected CSV/PDF export functionality, fully functional live refresh and manual refresh buttons, automatic first-user admin assignment with enhanced security features, dedicated coupon performance analytics dashboard, enhanced admin dashboard with key financial metrics and pending refunds management, fully editable landing page settings in admin panel (covering all sections including Home, About, Services, Slider, Experience Elite Growth slider with title/description/images/button configuration, and all other sections with functional Add Feature button in Service Section), manual user input for Monthly ROI in Elite Performance section of ROI simulator, full community data removal functionality, customizable withdrawal cooling periods and cycle durations in platform settings, identity-based referral system tracking users by Email ID and Username instead of deposit amounts, strict session security policy with one-hour maximum session duration and automatic logout after 15 minutes of inactivity for all users and admins, streamlined KYC document upload interface with document-type-specific upload fields and document lockdown after upload, optimized admin panel loading performance, synchronized FAQ management system between homepage and admin panel, linear sidebar menu structure in admin panel, corrected coupon usage count display and all coupon-related functionality fixes, comprehensive mobile responsiveness optimization ensuring all admin management and user investment features work seamlessly on smaller screens, mobile push notifications for withdrawal status updates and daily ROI payouts, deposit history page displaying all user deposits, admin investment history page displaying expired plans with creation date, expiration date, participant count, and total deposit amount, user-initiated investment plan deletion with automatic fund transfer to main deposit wallet (for plans with no active investments), internal wallet swap functionality allowing users to transfer funds from ROI and bonus wallets to main deposit wallet, announcements page accessible to both users and admins with admin CRUD operations and live updates, duplicate deposit prevention logic ensuring single transaction recording on multiple clicks, comprehensive code refactoring and rewrite for complete web application stack (front-end, back-end, and server-side code) to eliminate runtime, authorization, and connection errors while strictly preserving all existing functionality, data structures, and user-facing features, and unified content management system (CMS) for Blog and Events sections with full CRUD operations, rich text formatting, media management, draft/publish workflow, and automatic front-end synchronization.

---

## 2. Users and Use Cases

### 2.1 Target Users

All existing target users remain unchanged, with following additions:

- Content Administrators: Administrators responsible for creating, editing, and publishing blog posts and event listings through admin panel CMS interface, managing media assets, and maintaining content quality across public-facing pages
- Public Visitors: General website visitors who browse blog posts and event listings on public pages, accessing content via mobile and desktop devices

### 2.2 Core Use Cases

All existing core use cases remain unchanged, with following additions:

- Admins create new blog posts with title, author, publication date, featured image, content body, and tags/categories
- Admins edit existing blog posts and update any field
- Admins delete blog posts from system
- Admins save blog posts as drafts before publishing
- Admins publish draft blog posts to make them visible on public blog page
- Admins create new event listings with title, description, date and time, location, featured image, and optional registration link
- Admins edit existing event listings and update any field
- Admins delete event listings from system
- Admins save event listings as drafts before publishing
- Admins publish draft event listings to make them visible on public events page
- Admins upload images through media manager for blog posts and events
- Admins view dashboard overview showing recent blog posts and upcoming events
- System automatically displays published blog posts on public blog page in reverse chronological order
- System automatically displays published events on public events page, distinguishing between upcoming and past events
- Public visitors view individual blog post detail pages
- Public visitors view individual event detail pages
- System validates all admin input fields (required fields, date formats, etc.)
- System displays success messages after successful content creation or update
- System displays error messages when content operations fail
- System enforces admin-only access to CMS functionality through authentication and role-based access control

---

## 3. Page Structure and Functional Description

### 3.1 Page Structure

All existing page structure remains unchanged, with following additions under Admin Pages:

```
└── Admin Pages (Admin Authentication Required, Mobile Optimized)
    ├── Blog Management Page
    │   ├── Blog Posts List View
    │   ├── Blog Post Creation Interface
    │   ├── Blog Post Edit Interface
    │   ├── Blog Post Delete Interface
    │   ├── Draft/Publish Status Toggle
    │   └── Blog Categories/Tags Management
    ├── Events Management Page
    │   ├── Events List View
    │   ├── Event Creation Interface
    │   ├── Event Edit Interface
    │   ├── Event Delete Interface
    │   ├── Draft/Publish Status Toggle
    │   └── Upcoming/Past Events Filter
    ├── Media Manager Page
    │   ├── Image Upload Interface
    │   ├── Media Library View
    │   ├── Image Selection Tool
    │   └── Image Delete Interface
    └── Content Dashboard Page
        ├── Recent Blog Posts Overview
        ├── Upcoming Events Overview
        ├── Draft Content Summary
        └── Quick Action Buttons
```

Existing Public Pages structure updated:

```
├── Public Pages (Mobile Optimized)
│   ├── Blog Page (with floating social share component)
│   │   ├── Blog Posts List (reverse chronological order)
│   │   ├── Category/Tag Filter
│   │   └── Search Functionality
│   ├── Blog Post Detail Page
│   │   ├── Post Title and Metadata
│   │   ├── Featured Image
│   │   ├── Content Body
│   │   ├── Author Information
│   │   └── Related Posts Section
│   ├── Events Page (with floating social share component)
│   │   ├── Upcoming Events Section
│   │   ├── Past Events Section
│   │   └── Event Search/Filter
│   └── Event Detail Page
│       ├── Event Title and Description
│       ├── Featured Image
│       ├── Date, Time, and Location
│       ├── Registration Link (if applicable)
│       └── Related Events Section
```

### 3.2 Blog Management Page

#### 3.2.1 Page Purpose

Provide administrators with comprehensive interface for creating, editing, publishing, and managing blog posts with full CRUD operations and draft/publish workflow.

#### 3.2.2 Blog Posts List View

##### 3.2.2.1 List Display

- Table displaying all blog posts with columns:
  - Post Title
  - Author
  - Publication Date
  - Status (Draft/Published)
  - Categories/Tags
  - Actions (Edit/Delete/View)
- Pagination controls for large post lists
- Search bar for filtering posts by title or content
- Filter dropdown for status (All/Draft/Published)
- Sort options (Date, Title, Author)

##### 3.2.2.2 Quick Actions

- Create New Post button prominently displayed
- Bulk actions dropdown (Publish Selected, Delete Selected)
- Export posts list to CSV

#### 3.2.3 Blog Post Creation Interface

##### 3.2.3.1 Form Fields

- Post Title (required, text input, max 200 characters)
- Author (required, text input or dropdown of registered authors)
- Publication Date (required, date picker with time selection)
- Featured Image (required, image upload with media manager integration)
- Content Body (required, rich text editor supporting:
  - Bold, italic, underline formatting
  - Headings (H1-H6)
  - Bullet and numbered lists
  - Hyperlinks
  - Image insertion
  - Code blocks
  - Blockquotes)
- Categories (optional, multi-select dropdown)
- Tags (optional, text input with tag suggestions)
- SEO Meta Title (optional, text input, max 60 characters)
- SEO Meta Description (optional, textarea, max 160 characters)

##### 3.2.3.2 Action Buttons

- Save as Draft button (saves post without publishing)
- Publish button (validates all required fields and publishes post)
- Preview button (opens preview of post in new tab)
- Cancel button (returns to posts list with unsaved changes warning)

##### 3.2.3.3 Validation Rules

- Title must not be empty
- Author must be selected or entered
- Publication date must be valid date format
- Featured image must be uploaded
- Content body must contain at least 50 characters
- Display inline error messages for invalid fields
- Prevent form submission until all required fields valid

#### 3.2.4 Blog Post Edit Interface

##### 3.2.4.1 Form Pre-population

- Load existing post data into all form fields
- Display current featured image with option to replace
- Show current publication status (Draft/Published)

##### 3.2.4.2 Edit Actions

- Update button (saves changes and maintains current status)
- Publish button (if draft, publishes post; if published, updates published post)
- Unpublish button (if published, converts to draft)
- Delete button (with confirmation dialog)
- Cancel button (returns to posts list with unsaved changes warning)

##### 3.2.4.3 Change Tracking

- Display last modified date and time
- Show who last edited post (if multi-admin system)
- Highlight unsaved changes indicator

#### 3.2.5 Blog Post Delete Interface

##### 3.2.5.1 Deletion Confirmation

- Display confirmation dialog with post title
- Warning message: Deleting this post is permanent and cannot be undone
- Confirm Delete button
- Cancel button

##### 3.2.5.2 Post-Deletion Actions

- Remove post from database
- Remove post from public blog page immediately
- Display success message: Post deleted successfully
- Return to posts list view

#### 3.2.6 Blog Categories/Tags Management

##### 3.2.6.1 Categories Management

- List all existing categories
- Add new category interface (name, slug, description)
- Edit category interface
- Delete category interface (with reassignment option for posts)
- Category usage count display

##### 3.2.6.2 Tags Management

- List all existing tags
- Add new tag interface (name, slug)
- Edit tag interface
- Delete tag interface
- Tag usage count display
- Merge tags functionality

### 3.3 Events Management Page

#### 3.3.1 Page Purpose

Provide administrators with comprehensive interface for creating, editing, publishing, and managing event listings with full CRUD operations and draft/publish workflow.

#### 3.3.2 Events List View

##### 3.3.2.1 List Display

- Table displaying all events with columns:
  - Event Title
  - Date and Time
  - Location
  - Status (Draft/Published/Past)
  - Actions (Edit/Delete/View)
- Pagination controls for large event lists
- Search bar for filtering events by title or location
- Filter dropdown for status (All/Draft/Published/Upcoming/Past)
- Sort options (Date, Title, Location)

##### 3.3.2.2 Quick Actions

- Create New Event button prominently displayed
- Bulk actions dropdown (Publish Selected, Delete Selected)
- Export events list to CSV

#### 3.3.3 Event Creation Interface

##### 3.3.3.1 Form Fields

- Event Title (required, text input, max 200 characters)
- Event Description (required, rich text editor with same formatting options as blog posts)
- Event Date (required, date picker)
- Event Time (required, time picker with timezone selection)
- Location (required, text input with optional map integration)
- Featured Image (required, image upload with media manager integration)
- Registration Link (optional, URL input with validation)
- Event Capacity (optional, number input)
- Event Category (optional, dropdown)
- SEO Meta Title (optional, text input, max 60 characters)
- SEO Meta Description (optional, textarea, max 160 characters)

##### 3.3.3.2 Action Buttons

- Save as Draft button (saves event without publishing)
- Publish button (validates all required fields and publishes event)
- Preview button (opens preview of event in new tab)
- Cancel button (returns to events list with unsaved changes warning)

##### 3.3.3.3 Validation Rules

- Title must not be empty
- Description must contain at least 50 characters
- Event date must be valid date format and not in past (for new events)
- Event time must be valid time format
- Location must not be empty
- Featured image must be uploaded
- Registration link must be valid URL format (if provided)
- Display inline error messages for invalid fields
- Prevent form submission until all required fields valid

#### 3.3.4 Event Edit Interface

##### 3.3.4.1 Form Pre-population

- Load existing event data into all form fields
- Display current featured image with option to replace
- Show current publication status (Draft/Published)
- Display event status indicator (Upcoming/Past based on date)

##### 3.3.4.2 Edit Actions

- Update button (saves changes and maintains current status)
- Publish button (if draft, publishes event; if published, updates published event)
- Unpublish button (if published, converts to draft)
- Delete button (with confirmation dialog)
- Cancel button (returns to events list with unsaved changes warning)

##### 3.3.4.3 Change Tracking

- Display last modified date and time
- Show who last edited event (if multi-admin system)
- Highlight unsaved changes indicator

#### 3.3.5 Event Delete Interface

##### 3.3.5.1 Deletion Confirmation

- Display confirmation dialog with event title and date
- Warning message: Deleting this event is permanent and cannot be undone
- Confirm Delete button
- Cancel button

##### 3.3.5.2 Post-Deletion Actions

- Remove event from database
- Remove event from public events page immediately
- Display success message: Event deleted successfully
- Return to events list view

### 3.4 Media Manager Page

#### 3.4.1 Page Purpose

Provide centralized interface for uploading, organizing, and managing images used in blog posts and events.

#### 3.4.2 Image Upload Interface

##### 3.4.2.1 Upload Methods

- Drag and drop upload area
- Click to browse file system
- Support for multiple file selection
- Real-time upload progress indicator

##### 3.4.2.2 Upload Validation

- Accepted file formats: JPG, PNG, GIF, WebP
- Maximum file size: 5MB per image
- Display error message for invalid files
- Automatic image optimization on upload

#### 3.4.3 Media Library View

##### 3.4.3.1 Library Display

- Grid view of all uploaded images with thumbnails
- Image filename and upload date display
- Image dimensions and file size display
- Search bar for filtering images by filename
- Sort options (Upload Date, Filename, File Size)
- Pagination for large media libraries

##### 3.4.3.2 Image Actions

- Select image for insertion into post/event
- View full-size image in modal
- Copy image URL to clipboard
- Delete image (with confirmation and usage check)
- Edit image metadata (alt text, caption)

#### 3.4.4 Image Selection Tool

##### 3.4.4.1 Selection Interface

- Modal overlay when selecting image from post/event editor
- Display media library within modal
- Select button for chosen image
- Upload new image option within modal
- Cancel button to close without selection

##### 3.4.4.2 Selected Image Preview

- Display selected image thumbnail in post/event form
- Show image filename and dimensions
- Replace image button
- Remove image button

### 3.5 Content Dashboard Page

#### 3.5.1 Page Purpose

Provide administrators with at-a-glance overview of blog and events content status and quick access to common actions.

#### 3.5.2 Recent Blog Posts Overview

##### 3.5.2.1 Display Elements

- List of 5 most recent blog posts
- Post title, author, and publication date
- Status indicator (Draft/Published)
- Quick edit and view links
- View All Posts button

#### 3.5.3 Upcoming Events Overview

##### 3.5.3.1 Display Elements

- List of next 5 upcoming events
- Event title, date, and location
- Status indicator (Draft/Published)
- Days until event countdown
- Quick edit and view links
- View All Events button

#### 3.5.4 Draft Content Summary

##### 3.5.4.1 Display Elements

- Count of draft blog posts
- Count of draft events
- Quick links to view all drafts
- Reminder to publish pending drafts

#### 3.5.5 Quick Action Buttons

##### 3.5.5.1 Action Buttons

- Create New Blog Post button
- Create New Event button
- Upload Media button
- View Public Blog Page button
- View Public Events Page button

### 3.6 Public Blog Page

#### 3.6.1 Page Purpose

Display all published blog posts to public visitors in organized, browsable format with social sharing capabilities.

#### 3.6.2 Blog Posts List Display

##### 3.6.2.1 Post Cards

- Display posts in reverse chronological order (newest first)
- Each post card includes:
  - Featured image
  - Post title
  - Author name
  - Publication date
  - Excerpt (first 150 characters of content)
  - Read More link to detail page
  - Categories/tags display
- Pagination or infinite scroll for post navigation

##### 3.6.2.2 Filtering and Search

- Category filter dropdown
- Tag filter (clickable tags)
- Search bar for keyword search
- Clear filters button

#### 3.6.3 Floating Social Share Component

##### 3.6.3.1 Share Options

- Share buttons for major platforms (dynamically fetched from admin settings):
  - Facebook
  - Twitter
  - LinkedIn
  - WhatsApp
  - Email
- Copy link to clipboard button
- Floating position on page (fixed to side or bottom)

### 3.7 Blog Post Detail Page

#### 3.7.1 Page Purpose

Display full content of individual blog post with enhanced reading experience and social sharing.

#### 3.7.2 Post Content Display

##### 3.7.2.1 Content Elements

- Post title (H1 heading)
- Author name and avatar (if available)
- Publication date and reading time estimate
- Featured image (full width or contained)
- Full post content with rich text formatting preserved
- Categories and tags display
- Social share buttons (floating component)

##### 3.7.2.2 Related Posts Section

- Display 3-4 related posts based on categories/tags
- Related post cards with thumbnail, title, and excerpt
- Links to related post detail pages

### 3.8 Public Events Page

#### 3.8.1 Page Purpose

Display all published events to public visitors, clearly distinguishing between upcoming and past events with social sharing capabilities.

#### 3.8.2 Upcoming Events Section

##### 3.8.2.1 Event Cards

- Display upcoming events in chronological order (soonest first)
- Each event card includes:
  - Featured image
  - Event title
  - Date and time
  - Location
  - Brief description excerpt
  - Registration link button (if applicable)
  - View Details link
- Countdown timer for events within 7 days

#### 3.8.3 Past Events Section

##### 3.8.3.1 Event Cards

- Display past events in reverse chronological order (most recent first)
- Each event card includes:
  - Featured image (with past event overlay or badge)
  - Event title
  - Date and time
  - Location
  - View Details link
- Collapsed by default with Expand Past Events button

#### 3.8.4 Event Search and Filter

##### 3.8.4.1 Filter Options

- Date range filter (From Date - To Date)
- Location filter (dropdown of all event locations)
- Category filter (if event categories implemented)
- Search bar for keyword search
- Clear filters button

#### 3.8.5 Floating Social Share Component

##### 3.8.5.1 Share Options

- Same social share functionality as blog page
- Share entire events page or individual event

### 3.9 Event Detail Page

#### 3.9.1 Page Purpose

Display full details of individual event with registration capabilities and social sharing.

#### 3.9.2 Event Content Display

##### 3.9.2.1 Content Elements

- Event title (H1 heading)
- Featured image (full width or contained)
- Date and time with timezone
- Location with optional map embed
- Full event description with rich text formatting preserved
- Event capacity and availability (if applicable)
- Registration link button (prominent, if applicable)
- Add to Calendar button (generates .ics file)
- Social share buttons (floating component)

##### 3.9.2.2 Related Events Section

- Display 3-4 related upcoming events based on category or location
- Related event cards with thumbnail, title, date, and location
- Links to related event detail pages

---

## 4. Business Rules and Logic

All existing business rules remain unchanged, with following additions:

### 4.1 Blog Post Management Rules

#### 4.1.1 Publication Workflow

- New blog posts created with Draft status by default
- Draft posts not visible on public blog page
- Publishing post requires all required fields completed and validated
- Published posts immediately visible on public blog page
- Editing published post maintains published status unless explicitly unpublished
- Unpublishing post removes from public blog page immediately

#### 4.1.2 Content Validation

- Post title must be unique (no duplicate titles allowed)
- Publication date cannot be more than 1 year in future
- Featured image required before publishing (not required for draft)
- Content body must contain minimum 50 characters
- Rich text editor strips potentially harmful HTML/JavaScript
- All external links in content open in new tab by default

#### 4.1.3 SEO and Metadata

- If SEO meta title not provided, use post title
- If SEO meta description not provided, use first 160 characters of content
- Generate URL slug from post title (lowercase, hyphens for spaces)
- Ensure URL slug uniqueness (append number if duplicate)

#### 4.1.4 Categories and Tags

- Post can belong to multiple categories
- Post can have unlimited tags
- Deleting category requires reassigning posts to different category or Uncategorized
- Deleting tag removes tag from all posts but does not delete posts

### 4.2 Event Management Rules

#### 4.2.1 Publication Workflow

- New events created with Draft status by default
- Draft events not visible on public events page
- Publishing event requires all required fields completed and validated
- Published events immediately visible on public events page
- Editing published event maintains published status unless explicitly unpublished
- Unpublishing event removes from public events page immediately

#### 4.2.2 Event Status Logic

- Event automatically categorized as Upcoming if event date/time in future
- Event automatically categorized as Past if event date/time has passed
- Past events moved to Past Events section on public page automatically
- Past events remain editable in admin panel
- System checks event status on page load and updates display accordingly

#### 4.2.3 Content Validation

- Event title must be unique (no duplicate titles allowed)
- Event date cannot be in past when creating new event
- Event date can be in past when editing existing event (for corrections)
- Featured image required before publishing (not required for draft)
- Event description must contain minimum 50 characters
- Registration link must be valid URL format if provided
- Location field accepts free text (no strict validation)

#### 4.2.4 Registration Link Handling

- If registration link provided, display prominent Register button on detail page
- Registration link opens in new tab
- If no registration link, hide Register button
- Registration link can be updated or removed at any time

### 4.3 Media Management Rules

#### 4.3.1 Upload Rules

- Maximum file size: 5MB per image
- Accepted formats: JPG, JPEG, PNG, GIF, WebP
- Reject files exceeding size limit with error message
- Reject unsupported file formats with error message
- Automatically optimize images on upload (compress without quality loss)
- Generate multiple sizes (thumbnail, medium, large) for responsive display

#### 4.3.2 Storage and Organization

- Store images in organized folder structure by upload date
- Generate unique filename to prevent overwrites
- Preserve original filename in metadata
- Store image metadata (alt text, caption, upload date, uploader)

#### 4.3.3 Deletion Rules

- Check if image used in any published blog post or event before deletion
- If image in use, display warning: This image is used in X posts/events. Deleting will break those references
- Require confirmation to proceed with deletion
- If image not in use, delete without warning
- Permanently remove image files from storage on deletion

### 4.4 Front-End Synchronization Rules

#### 4.4.1 Real-Time Updates

- Publishing blog post or event triggers immediate update to public pages
- Unpublishing blog post or event triggers immediate removal from public pages
- Editing published content triggers immediate update on public pages
- No caching delay for content updates (or cache invalidation on update)

#### 4.4.2 Display Consistency

- Public pages use same rich text rendering as admin preview
- Featured images display with consistent aspect ratios across all views
- Categories and tags display with consistent styling
- Social share buttons use URLs from admin settings (dynamic fetch)

### 4.5 Access Control Rules

#### 4.5.1 Authentication Requirements

- All CMS pages require admin authentication
- Unauthenticated users redirected to admin login page
- Session timeout after 15 minutes of inactivity (per existing security policy)
- Automatic logout and redirect to login page on session expiry

#### 4.5.2 Role-Based Access

- Only users with Admin role can access CMS functionality
- Regular users cannot access blog/events management pages
- First registered user automatically assigned Admin role (per existing rule)
- Admin role assignment managed through existing user management system

### 4.6 Validation and Error Handling

#### 4.6.1 Form Validation

- Validate all required fields before allowing save or publish
- Display inline error messages next to invalid fields
- Highlight invalid fields with red border
- Prevent form submission until all validation passes
- Display summary of validation errors at top of form

#### 4.6.2 Success and Error Messages

- Display success message after successful post/event creation: Post created successfully
- Display success message after successful post/event update: Post updated successfully
- Display success message after successful post/event deletion: Post deleted successfully
- Display success message after successful publish: Post published successfully
- Display error message on save failure: Failed to save post. Please try again
- Display error message on publish failure: Failed to publish post. Please check all required fields
- Display error message on delete failure: Failed to delete post. Please try again
- All messages auto-dismiss after 5 seconds or include manual close button

### 4.7 Multi-Language Content Support

#### 4.7.1 Language-Specific Content

- Blog posts and events support multi-language content (per existing multi-language system)
- Admin can create separate versions of post/event for each supported language
- Language selector in post/event creation form
- Public pages display content in user's selected language
- If content not available in user's language, display default language version

#### 4.7.2 SEO Metadata per Language

- SEO meta title and description can be set per language
- URL slugs generated per language
- Locale-specific SEO optimization applied (per existing SEO system)

---

## 5. Database Schema

### 5.1 Blog Posts Table

#### 5.1.1 Table Name

blog_posts

#### 5.1.2 Columns

- id (UUID, Primary Key)
- title (VARCHAR(200), NOT NULL)
- slug (VARCHAR(250), UNIQUE, NOT NULL)
- author (VARCHAR(100), NOT NULL)
- publication_date (TIMESTAMP, NOT NULL)
- featured_image_id (UUID, Foreign Key to media table)
- content_body (TEXT, NOT NULL)
- excerpt (VARCHAR(300))
- status (ENUM: draft, published, NOT NULL, DEFAULT draft)
- seo_meta_title (VARCHAR(60))
- seo_meta_description (VARCHAR(160))
- language (VARCHAR(10), NOT NULL, DEFAULT en)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE)
- created_by (UUID, Foreign Key to users table)
- updated_by (UUID, Foreign Key to users table)

#### 5.1.3 Indexes

- Index on slug for fast lookup
- Index on status for filtering
- Index on publication_date for sorting
- Index on language for multi-language queries

### 5.2 Blog Categories Table

#### 5.2.1 Table Name

blog_categories

#### 5.2.2 Columns

- id (UUID, Primary Key)
- name (VARCHAR(100), NOT NULL)
- slug (VARCHAR(120), UNIQUE, NOT NULL)
- description (TEXT)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

### 5.3 Blog Tags Table

#### 5.3.1 Table Name

blog_tags

#### 5.3.2 Columns

- id (UUID, Primary Key)
- name (VARCHAR(50), NOT NULL)
- slug (VARCHAR(60), UNIQUE, NOT NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

### 5.4 Blog Post Categories Junction Table

#### 5.4.1 Table Name

blog_post_categories

#### 5.4.2 Columns

- post_id (UUID, Foreign Key to blog_posts table)
- category_id (UUID, Foreign Key to blog_categories table)
- PRIMARY KEY (post_id, category_id)

### 5.5 Blog Post Tags Junction Table

#### 5.5.1 Table Name

blog_post_tags

#### 5.5.2 Columns

- post_id (UUID, Foreign Key to blog_posts table)
- tag_id (UUID, Foreign Key to blog_tags table)
- PRIMARY KEY (post_id, tag_id)

### 5.6 Events Table

#### 5.6.1 Table Name

events

#### 5.6.2 Columns

- id (UUID, Primary Key)
- title (VARCHAR(200), NOT NULL)
- slug (VARCHAR(250), UNIQUE, NOT NULL)
- description (TEXT, NOT NULL)
- event_date (DATE, NOT NULL)
- event_time (TIME, NOT NULL)
- timezone (VARCHAR(50), NOT NULL)
- location (VARCHAR(300), NOT NULL)
- featured_image_id (UUID, Foreign Key to media table)
- registration_link (VARCHAR(500))
- capacity (INTEGER)
- category (VARCHAR(100))
- status (ENUM: draft, published, NOT NULL, DEFAULT draft)
- seo_meta_title (VARCHAR(60))
- seo_meta_description (VARCHAR(160))
- language (VARCHAR(10), NOT NULL, DEFAULT en)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE)
- created_by (UUID, Foreign Key to users table)
- updated_by (UUID, Foreign Key to users table)

#### 5.6.3 Indexes

- Index on slug for fast lookup
- Index on status for filtering
- Index on event_date for sorting and filtering
- Index on language for multi-language queries

### 5.7 Media Table

#### 5.7.1 Table Name

media

#### 5.7.2 Columns

- id (UUID, Primary Key)
- filename (VARCHAR(255), NOT NULL)
- original_filename (VARCHAR(255), NOT NULL)
- file_path (VARCHAR(500), NOT NULL)
- file_size (INTEGER, NOT NULL)
- mime_type (VARCHAR(50), NOT NULL)
- width (INTEGER)
- height (INTEGER)
- alt_text (VARCHAR(200))
- caption (TEXT)
- uploaded_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- uploaded_by (UUID, Foreign Key to users table)

#### 5.7.3 Indexes

- Index on filename for search
- Index on uploaded_at for sorting

---

## 6. API Endpoints

### 6.1 Blog Posts API

#### 6.1.1 Get All Blog Posts

- Endpoint: GET /api/admin/blog-posts
- Authentication: Required (Admin only)
- Query Parameters:
  - status (optional): draft, published, all
  - page (optional): page number for pagination
  - limit (optional): posts per page
  - search (optional): search term
- Response: JSON array of blog post objects with metadata

#### 6.1.2 Get Single Blog Post

- Endpoint: GET /api/admin/blog-posts/:id
- Authentication: Required (Admin only)
- Response: JSON object with full blog post details

#### 6.1.3 Create Blog Post

- Endpoint: POST /api/admin/blog-posts
- Authentication: Required (Admin only)
- Request Body: JSON object with post data
- Response: JSON object with created post details and success message

#### 6.1.4 Update Blog Post

- Endpoint: PUT /api/admin/blog-posts/:id
- Authentication: Required (Admin only)
- Request Body: JSON object with updated post data
- Response: JSON object with updated post details and success message

#### 6.1.5 Delete Blog Post

- Endpoint: DELETE /api/admin/blog-posts/:id
- Authentication: Required (Admin only)
- Response: Success message

#### 6.1.6 Publish Blog Post

- Endpoint: POST /api/admin/blog-posts/:id/publish
- Authentication: Required (Admin only)
- Response: JSON object with published post details and success message

#### 6.1.7 Unpublish Blog Post

- Endpoint: POST /api/admin/blog-posts/:id/unpublish
- Authentication: Required (Admin only)
- Response: JSON object with unpublished post details and success message

#### 6.1.8 Get Public Blog Posts

- Endpoint: GET /api/public/blog-posts
- Authentication: Not required
- Query Parameters:
  - page (optional): page number
  - limit (optional): posts per page
  - category (optional): filter by category slug
  - tag (optional): filter by tag slug
  - search (optional): search term
  - language (optional): content language
- Response: JSON array of published blog posts

#### 6.1.9 Get Public Blog Post Detail

- Endpoint: GET /api/public/blog-posts/:slug
- Authentication: Not required
- Response: JSON object with full published post details

### 6.2 Events API

#### 6.2.1 Get All Events

- Endpoint: GET /api/admin/events
- Authentication: Required (Admin only)
- Query Parameters:
  - status (optional): draft, published, all
  - page (optional): page number
  - limit (optional): events per page
  - search (optional): search term
- Response: JSON array of event objects with metadata

#### 6.2.2 Get Single Event

- Endpoint: GET /api/admin/events/:id
- Authentication: Required (Admin only)
- Response: JSON object with full event details

#### 6.2.3 Create Event

- Endpoint: POST /api/admin/events
- Authentication: Required (Admin only)
- Request Body: JSON object with event data
- Response: JSON object with created event details and success message

#### 6.2.4 Update Event

- Endpoint: PUT /api/admin/events/:id
- Authentication: Required (Admin only)
- Request Body: JSON object with updated event data
- Response: JSON object with updated event details and success message

#### 6.2.5 Delete Event

- Endpoint: DELETE /api/admin/events/:id
- Authentication: Required (Admin only)
- Response: Success message

#### 6.2.6 Publish Event

- Endpoint: POST /api/admin/events/:id/publish
- Authentication: Required (Admin only)
- Response: JSON object with published event details and success message

#### 6.2.7 Unpublish Event

- Endpoint: POST /api/admin/events/:id/unpublish
- Authentication: Required (Admin only)
- Response: JSON object with unpublished event details and success message

#### 6.2.8 Get Public Events

- Endpoint: GET /api/public/events
- Authentication: Not required
- Query Parameters:
  - page (optional): page number
  - limit (optional): events per page
  - status (optional): upcoming, past
  - category (optional): filter by category
  - search (optional): search term
  - language (optional): content language
- Response: JSON array of published events

#### 6.2.9 Get Public Event Detail

- Endpoint: GET /api/public/events/:slug
- Authentication: Not required
- Response: JSON object with full published event details

### 6.3 Media API

#### 6.3.1 Upload Media

- Endpoint: POST /api/admin/media
- Authentication: Required (Admin only)
- Request: Multipart form data with image file
- Response: JSON object with uploaded media details

#### 6.3.2 Get All Media

- Endpoint: GET /api/admin/media
- Authentication: Required (Admin only)
- Query Parameters:
  - page (optional): page number
  - limit (optional): media per page
  - search (optional): search by filename
- Response: JSON array of media objects

#### 6.3.3 Get Single Media

- Endpoint: GET /api/admin/media/:id
- Authentication: Required (Admin only)
- Response: JSON object with media details

#### 6.3.4 Update Media Metadata

- Endpoint: PUT /api/admin/media/:id
- Authentication: Required (Admin only)
- Request Body: JSON object with updated metadata (alt_text, caption)
- Response: JSON object with updated media details

#### 6.3.5 Delete Media

- Endpoint: DELETE /api/admin/media/:id
- Authentication: Required (Admin only)
- Response: Success message or warning if media in use

### 6.4 Categories and Tags API

#### 6.4.1 Get All Categories

- Endpoint: GET /api/admin/blog-categories
- Authentication: Required (Admin only)
- Response: JSON array of category objects

#### 6.4.2 Create Category

- Endpoint: POST /api/admin/blog-categories
- Authentication: Required (Admin only)
- Request Body: JSON object with category data
- Response: JSON object with created category

#### 6.4.3 Update Category

- Endpoint: PUT /api/admin/blog-categories/:id
- Authentication: Required (Admin only)
- Request Body: JSON object with updated category data
- Response: JSON object with updated category

#### 6.4.4 Delete Category

- Endpoint: DELETE /api/admin/blog-categories/:id
- Authentication: Required (Admin only)
- Response: Success message

#### 6.4.5 Get All Tags

- Endpoint: GET /api/admin/blog-tags
- Authentication: Required (Admin only)
- Response: JSON array of tag objects

#### 6.4.6 Create Tag

- Endpoint: POST /api/admin/blog-tags
- Authentication: Required (Admin only)
- Request Body: JSON object with tag data
- Response: JSON object with created tag

#### 6.4.7 Update Tag

- Endpoint: PUT /api/admin/blog-tags/:id
- Authentication: Required (Admin only)
- Request Body: JSON object with updated tag data
- Response: JSON object with updated tag

#### 6.4.8 Delete Tag

- Endpoint: DELETE /api/admin/blog-tags/:id
- Authentication: Required (Admin only)
- Response: Success message

---

## 7. Exception and Boundary Cases

All existing exception and boundary cases remain unchanged, with following additions:

| Scenario | Expected Behavior |
|---|---|
| Admin attempts to publish blog post with missing required fields | System displays validation errors for each missing field, prevents publish action, displays message: Please complete all required fields before publishing |
| Admin attempts to create blog post with duplicate title | System displays error: A post with this title already exists. Please use a different title, prevent save action |
| Admin uploads image exceeding 5MB size limit | System displays error: File size exceeds 5MB limit. Please upload a smaller image, reject upload |
| Admin uploads unsupported file format (e.g., PDF) | System displays error: Unsupported file format. Please upload JPG, PNG, GIF, or WebP images only, reject upload |
| Admin attempts to delete image used in published blog post | System displays warning: This image is used in 3 published posts. Deleting will break those references. Continue?, require confirmation |
| Admin creates event with date in past | System displays error: Event date cannot be in the past for new events, prevent save action |
| Admin edits existing event and changes date to past | System allows save (for corrections), displays warning: This event date is in the past |
| Admin attempts to publish event with invalid registration link format | System displays error: Registration link must be a valid URL (e.g., https://example.com), prevent publish action |
| Public visitor accesses blog post detail page for unpublished post | System displays 404 Not Found page |
| Public visitor accesses event detail page for draft event | System displays 404 Not Found page |
| Admin session expires while editing blog post | System displays session expired message, redirects to login page, preserves unsaved changes in browser local storage for recovery after re-login |
| Admin loses internet connection while uploading media | System displays error: Upload failed due to network error. Please check your connection and try again, allow retry |
| Database connection fails during blog post save | System displays error: Unable to save post due to server error. Please try again later, log error for admin investigation |
| Admin attempts to access CMS pages without authentication | System redirects to admin login page with message: Please log in to access this page |
| Regular user attempts to access CMS pages | System displays 403 Forbidden page with message: You do not have permission to access this page |
| Admin deletes category with assigned posts | System displays dialog: This category has X posts. Please reassign posts to:, provide dropdown of other categories, require selection before deletion |
| Admin creates blog post without SEO metadata | System automatically generates SEO metadata from post title and content, displays info message: SEO metadata auto-generated. You can customize it in the form |
| Public blog page loads but no published posts exist | System displays message: No blog posts available yet. Check back soon! |
| Public events page loads but no upcoming events exist | System displays message: No upcoming events at this time. Check back soon! in Upcoming Events section |
| Admin previews blog post before publishing | System opens preview in new tab showing post as it will appear on public page, includes Draft watermark |
| Admin attempts to create blog post with extremely long content (>100,000 characters) | System displays warning: Content is very long and may affect page load performance. Consider splitting into multiple posts, allow save but recommend optimization |
| Rich text editor contains malicious JavaScript | System automatically strips all script tags and potentially harmful HTML, displays warning: Potentially harmful code was removed from your content |
| Admin uploads image with very large dimensions (e.g., 10000x10000px) | System automatically resizes image to maximum 2000px width while maintaining aspect ratio, displays info: Image was resized for optimal performance |
| Multiple admins edit same blog post simultaneously | System implements last-write-wins strategy, displays warning to second admin: This post was recently modified by another admin. Your changes will overwrite theirs |
| Admin attempts to delete blog post but database operation fails | System displays error: Failed to delete post due to server error. Please try again, log error for investigation |
| Public visitor searches blog with no matching results | System displays message: No posts found matching your search. Try different keywords |
| Admin creates event without registration link | System hides Register button on public event detail page, displays only event information |
| Public visitor filters events by date range with no results | System displays message: No events found in selected date range |
| Admin uploads media but storage quota exceeded | System displays error: Storage quota exceeded. Please delete unused media or contact support to increase quota |
| Blog post slug generation results in duplicate slug | System automatically appends incremental number to slug (e.g., my-post-title-2), ensures uniqueness |
| Admin attempts to bulk delete 100+ blog posts | System displays confirmation: You are about to delete X posts. This action cannot be undone. Continue?, process deletion in batches to prevent timeout |
| Public page loads blog post with missing featured image | System displays placeholder image, logs warning for admin to fix |
| Admin creates blog post in unsupported language | System defaults to English, displays warning: Selected language not supported. Defaulting to English |
| Event date/time passes while admin editing event | System automatically updates event status to Past on next page load, displays info: This event is now marked as past |
| Admin attempts to create 1000+ categories | System allows creation but displays performance warning: Large number of categories may affect performance. Consider consolidating |

---

## 8. Acceptance Criteria

All existing acceptance criteria remain unchanged, with following additions:

- Blog Management Page accessible from admin panel and displays all blog posts
- Blog Post Creation Interface functional with all required fields and rich text editor
- Blog Post Edit Interface loads existing post data and allows updates
- Blog Post Delete Interface removes post from database and public page
- Draft/Publish workflow functional for blog posts
- Blog Categories and Tags Management functional with CRUD operations
- Events Management Page accessible from admin panel and displays all events
- Event Creation Interface functional with all required fields and rich text editor
- Event Edit Interface loads existing event data and allows updates
- Event Delete Interface removes event from database and public page
- Draft/Publish workflow functional for events
- Media Manager Page accessible and displays all uploaded images
- Image Upload Interface accepts valid formats and rejects invalid files
- Image Upload Interface enforces 5MB size limit
- Media Library displays images in grid view with thumbnails
- Image Selection Tool allows selecting images for posts and events
- Image Delete Interface removes images from storage
- Content Dashboard Page displays overview of recent posts and upcoming events
- Quick Action Buttons provide shortcuts to common tasks
- Public Blog Page displays all published posts in reverse chronological order
- Public Blog Page filtering and search functional
- Blog Post Detail Page displays full post content with formatting preserved
- Related Posts Section displays relevant posts on detail page
- Public Events Page displays upcoming and past events in separate sections
- Public Events Page distinguishes between upcoming and past events visually
- Event Detail Page displays full event information
- Registration Link button displays when link provided
- Add to Calendar button generates valid .ics file
- Floating Social Share Component displays on blog and events pages
- Social share buttons use URLs from admin settings
- All form validation rules enforced correctly
- Inline error messages display for invalid fields
- Success messages display after successful operations
- Error messages display when operations fail
- All required fields validated before publish
- Draft posts not visible on public pages
- Published posts immediately visible on public pages
- Unpublishing removes content from public pages immediately
- Editing published content updates public pages immediately
- Database schema implemented with all specified tables and columns
- All API endpoints functional and return correct responses
- Admin authentication required for all CMS pages
- Role-based access control enforces admin-only access
- Regular users cannot access CMS functionality
- Session timeout after 15 minutes of inactivity
- Multi-language content support functional
- SEO metadata auto-generated when not provided
- URL slugs generated automatically and ensured unique
- Image optimization applied on upload
- Multiple image sizes generated for responsive display
- Rich text editor strips harmful HTML/JavaScript
- All CMS pages mobile-responsive and functional on small screens
- All public pages mobile-responsive and display correctly
- Featured images display with consistent aspect ratios
- Categories and tags display with consistent styling
- Event status automatically updates based on date/time
- Past events moved to Past Events section automatically
- Countdown timer displays for events within 7 days
- All exception and boundary cases handled gracefully
- All error messages clear and actionable
- All success messages confirm completed actions
- System maintains visual consistency across admin and public pages
- All functionality tested and verified working correctly
- Documentation provided for admin users on how to use CMS
- Technical documentation provided for developers

---

## 9. Out of Scope for This Release

All existing out of scope items remain unchanged, with following additions:

- Advanced blog post scheduling (publish at specific future date/time)
- Blog post versioning and revision history
- Multi-author collaboration with draft review workflow
- Blog post comments system
- Blog post likes or reactions
- Email subscription and newsletter integration
- RSS feed generation for blog
- Event registration form builder (external registration links only)
- Event attendee management and check-in system
- Event capacity tracking and waitlist management
- Recurring events functionality
- Event calendar view (month/week/day views)
- Advanced media editing (crop, resize, filters) within platform
- Video upload and management
- Audio file upload and management
- Document upload and management (PDF, Word, etc.)
- Media folders and advanced organization
- Advanced SEO tools (keyword analysis, readability scores)
- Social media auto-posting on publish
- Analytics integration for blog and events (page views, engagement)
- A/B testing for blog post titles or content
- Content recommendation engine
- Related posts based on AI/ML algorithms
- Automated content translation
- Blog post import/export from other platforms
- Event import from calendar services (Google Calendar, Outlook)
- Advanced search with filters (date range, author, etc.) on public pages
- Blog post series or collections
- Featured posts or sticky posts
- Custom post types beyond blog and events
- User-generated content submission
- Content moderation workflow for user submissions