# Requirements Document

## 1. Application Overview

### 1.1 Application Name

Gold X Usdt

### 1.2 Application Description

A mobile-optimized multi-level marketing (MLM) platform focused on Gold USDT investment, featuring automated ROI distribution, 15-level referral commission tracking (with performance-based unlocking mechanism), wallet management, secure payment processing, enhanced coupon code system with advanced redemption rules (supporting transaction type restrictions, plan-specific targeting, single-use enforcement per user with proper validation and expiration handling, real-time discount preview, bulk coupon generation, scheduled activation/deactivation for marketing campaigns, manual deletion functionality, auto-deletion upon usage limit or expiry with proper ROI wallet balance display, bulk deletion of used coupons, comprehensive analytics dashboard with user demographic insights and coupon type comparison displaying accurate metrics, automated tier-based and performance-based coupon generation, and coupon history tracking), investment and return calculator (with interactive animated charts via Recharts showing ROI growth trends and referral commission breakdown, and manual user input for Monthly ROI calculations in Elite Performance section), referral level calculator, team growth simulator in user dashboard (projecting network earnings across all 15 referral levels with multi-year projection charts), PDF export and email sharing of simulation results, network leader leaderboard on dashboard (ranking top members by unlocked referral levels), unified wealth building projection dashboard accessible from earnings analysis page (syncing personal investment calculator with team growth simulator), comprehensive admin control panel for managing user performance metrics and ROI configuration, advanced admin settings (SEO, branding, analytics, site configuration, social media URL configuration), SMTP credential management (with real-time backend propagation), TRC-20/BEP-20 auto-confirmation API configuration, professionally designed transactional email templates (registration OTP verification and password reset), calculator results export to PDF and email sharing, post-development code audit and quality assurance process, complete deployment configuration for Netlify, Vercel and other compatible platforms, Supabase native backend using PostgreSQL as primary database, complete backend documentation service (outputting all data, functions, tables, SQL definitions and export values in CSV file format), automated daily ROI distribution system using Supabase Edge Functions for investment plans with 24-hour timer automatic restart mechanism and ROI wallet balance update, downline analysis page, network analysis page integrated as dedicated tab within referral page (with functional tier breakdown displaying populated user details and correct data fetching), floating social share component on blog and events pages, dynamic social media URLs fetched from admin settings, multi-language toggle supporting English, Spanish, Arabic, Tamil, Hindi and French (auto-detecting language based on IP on first visit), automated OCR system on KYC document upload page with document lockdown after upload preventing changes, enhanced admin KYC management page (AI-extracted OCR text displayed side-by-side with uploaded documents, with KYC text data and document images export to PDF or Excel, admin manual KYC document upload for specific users with approval marking visible on user side, and dashboard section displaying user catalog with document types and verification statuses), comprehensive security hardening layer with protection against all CWE Top 25 vulnerabilities and extended CWE catalog threats, dedicated INR/USDT currency display subdomain page (displaying real-time market rates via Supabase Edge Function cron job), admin-side rate monitoring and alerts, enhanced user deposit process (with admin-confirmed fund transfer and coupon code application with correct discount calculation), automated platform rate update settings, browser push notifications for admin rate fluctuation alerts, security center with real-time refresh and enhanced auth security logs (including detailed geolocation data and device fingerprinting), enhanced admin audit log detail view (side-by-side JSON diff comparison), multi-language content support for dynamic sections (blog posts and investment plans) with database schema and API updates, locale-specific SEO metadata optimization, enhanced two-factor authentication system for admin accounts (supporting both Email OTP and Google Authenticator with user-selectable verification method), enhanced input sanitization and injection protection, HTTPS-only enforcement (with HTTP 301 redirect), frontend performance optimization, FAQ section with admin management system synchronized with homepage, systematic documentation upload failure troubleshooting and resolution, admin security log section tracking MFA events (enable, disable, recovery via backup codes, method selection), PDF export functionality for weekly security audit reports, security audit page, security center page and style guide step-by-step user guide documentation, comprehensive anti-hacking security framework (protecting against all major attack vectors including SQL injection, XSS, CSRF, SSRF, RCE, insecure deserialization, business logic vulnerabilities, API abuse, malicious file uploads, DoS attacks, dependency vulnerabilities, path traversal, command injection, buffer overflow, integer overflow, authentication bypass, authorization flaws, session management issues, cryptographic failures, information disclosure, race conditions, and all CWE Top 25 plus extended CWE catalog threats), advanced referral dashboard displaying 15-level referral network tree view and detailed commission statistics (with resolved Failed to Load error and functional data loading), network genealogy tree export as high-resolution image or PDF for team presentations, comprehensive transaction history page for users to track all deposits, withdrawals and ROI records in one place, complete Edge Function error handling mechanism (with comprehensive capture and friendly prompts for network errors, timeout errors, HTTP errors, response format errors, etc.), admin security dashboard (visualizing 2FA attempt distribution over the past 24 hours and potential brute force attacks), browser push notification system for website users (including automatic notifications for specific system events such as balance reaching threshold, ROI arrival, withdrawal status updates, and daily ROI payouts), enhanced Telegram notification system for routing administrative alerts to a designated Telegram account (with interactive functionality allowing administrators to directly reply to support tickets or approve withdrawal requests via Telegram), secure export feature for enhanced security audit logs supporting PDF, CSV and Excel formats with strict compliance and tamper-evident controls, notification recall functionality allowing administrators to cancel sent global notifications within a configurable time window, real-time notification preview for mobile and desktop devices on notification composition page, custom notification category management system for dynamic notification type organization and filtering, notification history and system logs CSV export functionality for auditing purposes, Telegram webhook verification tool for testing bot message reception, comprehensive investment plan management system with full CRUD operations, automated validation, lifecycle management, unique wallet address generation per plan, special fixed plan configuration, detailed analytics reports for admin dashboard showing plan performance, active investment volume and projected payouts, visible deposit fee and refund duration display, date-time based investment duration tracking with automatic plan deletion upon expiration and transfer to investment history, automatic days and hours remaining calculation when editing investment plans based on chosen expiration date, user dashboard refund countdown timer showing remaining time based on plan duration and deposit timestamp, user dashboard active plans with automatic Next Payout timer restart and immediate ROI credit upon cycle completion, bonus reward withdrawal countdown timer, enhanced admin panel with plan name filtering for deposits and withdrawals, centralized pending actions page, corrected CSV/PDF export functionality, fully functional live refresh and manual refresh buttons, automatic first-user admin assignment with enhanced security features, dedicated coupon performance analytics dashboard, enhanced admin dashboard with key financial metrics and pending refunds management, fully editable landing page settings in admin panel (covering all sections including Home, About, Services, Slider, Experience Elite Growth slider with title/description/images/button configuration, and all other sections with functional Add Feature button in Service Section), manual user input for Monthly ROI in Elite Performance section of ROI simulator, full community data removal functionality, customizable withdrawal cooling periods and cycle durations in platform settings, identity-based referral system tracking users by Email ID and Username instead of deposit amounts, strict session security policy with one-hour maximum session duration and automatic logout after 15 minutes of inactivity for all users and admins, streamlined KYC document upload interface with document-type-specific upload fields and document lockdown after upload, optimized admin panel loading performance, synchronized FAQ management system between homepage and admin panel, linear sidebar menu structure in admin panel, corrected coupon usage count display and all coupon-related functionality fixes, comprehensive mobile responsiveness optimization ensuring all admin management and user investment features work seamlessly on smaller screens, mobile push notifications for withdrawal status updates and daily ROI payouts, deposit history page displaying all user deposits, admin investment history page displaying expired plans with creation date, expiration date, participant count, and total deposit amount, user-initiated investment plan deletion with automatic fund transfer to main deposit wallet (for plans with no active investments), internal wallet swap functionality allowing users to transfer funds from ROI and bonus wallets to main deposit wallet, announcements page accessible to both users and admins with admin CRUD operations and live updates, duplicate deposit prevention logic ensuring single transaction recording on multiple clicks, comprehensive code refactoring and rewrite for complete web application stack (front-end, back-end, and server-side code) to eliminate runtime, authorization, and connection errors while strictly preserving all existing functionality, data structures, and user-facing features, unified content management system (CMS) for Blog and Events sections with full CRUD operations, rich text formatting, media management, draft/publish workflow, and automatic front-end synchronization, TypeScript type safety improvements with automated any type replacement script, optimized Vite build configuration with manual code chunking for vendor bundles, and production monitoring setup with Vercel Analytics, Speed Insights, and Supabase logging with critical issue alerting.

---

## 2. Users and Use Cases

### 2.1 Target Users

All existing target users remain unchanged.

### 2.2 Core Use Cases

All existing core use cases remain unchanged.

---

## 3. Page Structure and Functional Description

All existing page structure and functional descriptions remain unchanged.

---

## 4. Business Rules and Logic

All existing business rules remain unchanged, with following additions:

### 4.1 TypeScript Type Safety Rules

#### 4.1.1 Any Type Replacement Policy

  - All instances of any type must be replaced with specific TypeScript types
  - Error handling blocks must use unknown type instead of any
  - Type assertions must be validated before use
  - Generic types must be properly constrained

#### 4.1.2 Type Replacement Script Execution

  - Script scans entire codebase for any type usage
  - Script identifies error handling blocks and replaces any with unknown
  - Script generates report of all any type locations
  - Script suggests specific type replacements based on context
  - Manual review required before applying automated replacements

### 4.2 Build Optimization Rules

#### 4.2.1 Vendor Bundle Chunking Strategy

  - React core libraries bundled into react-vendor chunk
  - UI component libraries bundled into ui-vendor chunk
  - Chart and visualization libraries bundled into chart-vendor chunk
  - Each vendor chunk size target: under 200KB gzipped
  - Dynamic imports used for route-based code splitting

#### 4.2.2 Chunk Loading Priority

  - Critical vendor chunks loaded with high priority
  - Non-critical chunks loaded with low priority
  - Preload hints configured for above-the-fold content
  - Prefetch hints configured for likely next navigation

### 4.3 Production Monitoring Rules

#### 4.3.1 Vercel Analytics Configuration

  - Page view tracking enabled for all routes
  - Custom event tracking for critical user actions
  - Web Vitals monitoring enabled (LCP, FID, CLS, TTFB, FCP)
  - Real user monitoring data collected and analyzed

#### 4.3.2 Vercel Speed Insights Configuration

  - Performance metrics tracked per route
  - Slow page load alerts configured (threshold: 3 seconds)
  - Bundle size monitoring enabled
  - Asset optimization recommendations reviewed weekly

#### 4.3.3 Supabase Logging Configuration

  - Error logs captured with full stack traces
  - Database query performance logged
  - Edge Function execution logs retained for 30 days
  - Authentication events logged with user context

#### 4.3.4 Critical Issue Alerting

  - Email alerts sent for error rate exceeding 5% threshold
  - Slack/Telegram notifications for database connection failures
  - SMS alerts for complete service outages
  - Alert escalation after 15 minutes without acknowledgment
  - Weekly summary reports sent to admin team

---

## 5. Technical Implementation Details

### 5.1 TypeScript Type Replacement Script

#### 5.1.1 Script Functionality

  - Scan all .ts and .tsx files in project
  - Identify all any type declarations and usages
  - Categorize any types by context (error handling, function parameters, return types, etc.)
  - Replace any with unknown in try-catch blocks and error handlers
  - Generate detailed report with file paths and line numbers
  - Provide type suggestions based on surrounding code context

#### 5.1.2 Script Execution Process

  - Run script via npm command: npm run type-check:fix
  - Review generated report before applying changes
  - Apply automated replacements for error handling blocks
  - Manually review and fix remaining any types
  - Run TypeScript compiler to verify no type errors introduced
  - Commit changes with detailed commit message

#### 5.1.3 Error Handling Type Pattern

  - Replace catch (error: any) with catch (error: unknown)
  - Use type guards to narrow unknown to specific error types
  - Example pattern:
```typescript
try {
  // code
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Unknown error occurred');
  }
}
```

### 5.2 Vite Build Configuration

#### 5.2.1 Manual Chunk Configuration

  - Configure vite.config.ts with manualChunks function
  - Split vendor dependencies into logical groups:
    - react-vendor: react, react-dom, react-router-dom
    - ui-vendor: @radix-ui/*, lucide-react, tailwind-related packages
    - chart-vendor: recharts, d3-related packages
  - Configure chunk size warnings threshold: 500KB
  - Enable build analysis with rollup-plugin-visualizer

#### 5.2.2 Build Optimization Settings

  - Enable minification with terser
  - Configure tree shaking for unused code elimination
  - Enable CSS code splitting
  - Configure asset inlining threshold: 4KB
  - Enable gzip compression for production builds

#### 5.2.3 Example Configuration

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', 'lucide-react'],
          'chart-vendor': ['recharts']
        }
      }
    },
    chunkSizeWarningLimit: 500
  }
});
```

### 5.3 Vercel Analytics Integration

#### 5.3.1 Installation and Setup

  - Install @vercel/analytics package
  - Add Analytics component to root layout
  - Configure data collection consent (GDPR compliant)
  - Enable custom event tracking for key user actions

#### 5.3.2 Custom Event Tracking

  - Track deposit submissions
  - Track withdrawal requests
  - Track investment plan selections
  - Track referral link shares
  - Track KYC document uploads

#### 5.3.3 Web Vitals Monitoring

  - Monitor Largest Contentful Paint (LCP) - target: under 2.5s
  - Monitor First Input Delay (FID) - target: under 100ms
  - Monitor Cumulative Layout Shift (CLS) - target: under 0.1
  - Monitor Time to First Byte (TTFB) - target: under 600ms
  - Monitor First Contentful Paint (FCP) - target: under 1.8s

### 5.4 Vercel Speed Insights Integration

#### 5.4.1 Installation and Setup

  - Install @vercel/speed-insights package
  - Add SpeedInsights component to root layout
  - Configure performance budget thresholds
  - Enable real user monitoring

#### 5.4.2 Performance Monitoring

  - Track page load times per route
  - Monitor bundle size changes over time
  - Identify slow database queries
  - Track API response times
  - Monitor third-party script impact

#### 5.4.3 Alert Configuration

  - Alert when page load exceeds 3 seconds
  - Alert when bundle size increases by more than 10%
  - Alert when Core Web Vitals fail thresholds
  - Weekly performance summary reports

### 5.5 Supabase Logging Configuration

#### 5.5.1 Error Logging Setup

  - Configure Supabase logging in Edge Functions
  - Capture all unhandled errors with full stack traces
  - Log error context (user ID, request parameters, timestamp)
  - Implement error categorization (critical, warning, info)
  - Set up log retention policy: 30 days

#### 5.5.2 Database Query Logging

  - Enable slow query logging (threshold: 1 second)
  - Log query execution plans for optimization
  - Track connection pool usage
  - Monitor database CPU and memory usage

#### 5.5.3 Edge Function Logging

  - Log all Edge Function invocations
  - Track execution duration and memory usage
  - Log function errors with request context
  - Monitor cold start frequency and duration

#### 5.5.4 Authentication Event Logging

  - Log all login attempts (successful and failed)
  - Log password reset requests
  - Log 2FA verification attempts
  - Log session creation and expiration
  - Track suspicious authentication patterns

### 5.6 Critical Issue Alerting System

#### 5.6.1 Alert Channels Configuration

  - Email alerts: admin team distribution list
  - Slack/Telegram: dedicated monitoring channel
  - SMS alerts: on-call administrator phone numbers
  - Dashboard alerts: in-app notification system

#### 5.6.2 Alert Thresholds

  - Error rate threshold: 5% of total requests
  - Response time threshold: 3 seconds average
  - Database connection failure: immediate alert
  - Edge Function failure rate: 10% threshold
  - Authentication failure spike: 20 failed attempts in 5 minutes

#### 5.6.3 Alert Escalation Policy

  - Initial alert sent to primary on-call admin
  - Escalate to secondary admin after 15 minutes without acknowledgment
  - Escalate to management after 30 minutes without resolution
  - Automatic incident creation in tracking system

#### 5.6.4 Alert Content

  - Alert severity level (critical, high, medium, low)
  - Affected service or component
  - Error message and stack trace
  - Affected user count (if applicable)
  - Suggested remediation steps
  - Link to detailed logs and metrics

---

## 6. Exception and Boundary Cases

All existing exception and boundary cases remain unchanged, with following additions:

| Scenario | Expected Behavior |
|---|---|
| TypeScript type replacement script encounters ambiguous any type | Script flags for manual review, provides context and suggestions, does not auto-replace |
| Vite build fails due to chunk size exceeding limit | Build process displays warning with chunk details, suggests splitting strategies, allows build to continue |
| Vercel Analytics fails to load due to network error | Application continues functioning normally, analytics data not collected for affected sessions, error logged |
| Speed Insights detects performance regression | Alert sent to admin team, detailed report generated with affected routes and metrics, recommendations provided |
| Supabase logging service unavailable | Errors logged to local fallback system, retry mechanism attempts reconnection, alert sent to admin |
| Critical alert sent but no admin acknowledges within 15 minutes | Alert escalated to secondary admin, SMS notification sent, incident automatically created |
| Error rate exceeds 5% threshold | Immediate alert sent via all channels, affected routes identified, automatic rollback considered |
| Database query logging fills storage quota | Oldest logs automatically archived, alert sent to admin, log retention policy reviewed |
| Edge Function execution time exceeds timeout | Function terminated gracefully, error logged with execution context, user receives timeout error message |
| Web Vitals metrics fail all thresholds | Comprehensive performance audit triggered, detailed report generated, optimization recommendations provided |
| Type replacement script modifies critical production code | Changes require code review approval, automated tests must pass, staged rollout to production |
| Vendor chunk size exceeds 200KB target | Build warning displayed, chunk analysis report generated, refactoring recommendations provided |
| Analytics tracking blocked by user browser extension | Application functions normally, analytics data not collected, no error displayed to user |
| Alert system sends duplicate notifications | Deduplication logic prevents multiple alerts for same issue within 5-minute window |
| Monitoring dashboard shows conflicting metrics | Data validation checks triggered, source data reviewed, alert sent if data integrity issue detected |

---

## 7. Acceptance Criteria

All existing acceptance criteria remain unchanged, with following additions:

  - TypeScript type replacement script successfully identifies all any type usages
  - Script replaces any with unknown in all error handling blocks
  - Script generates comprehensive report with file paths and line numbers
  - All error handling blocks use unknown type with proper type guards
  - No any types remain in error handling code after script execution
  - Vite build configuration includes manual chunk splitting
  - React vendor chunk size under 200KB gzipped
  - UI vendor chunk size under 200KB gzipped
  - Chart vendor chunk size under 200KB gzipped
  - Build process completes successfully with chunked output
  - Vercel Analytics installed and configured correctly
  - Custom event tracking functional for all specified user actions
  - Web Vitals monitoring active and reporting metrics
  - Vercel Speed Insights installed and configured correctly
  - Performance metrics tracked per route
  - Slow page load alerts configured and functional
  - Supabase logging configured for all Edge Functions
  - Error logs captured with full stack traces
  - Database query performance logged correctly
  - Authentication events logged with user context
  - Email alerts sent when error rate exceeds 5%
  - Slack/Telegram notifications sent for database failures
  - SMS alerts sent for complete service outages
  - Alert escalation triggers after 15 minutes without acknowledgment
  - Weekly summary reports generated and sent to admin team
  - All monitoring dashboards accessible and displaying real-time data
  - Critical issue alerts contain all required information
  - Alert deduplication prevents duplicate notifications
  - Monitoring system does not impact application performance
  - All logs retained for 30 days as configured
  - Performance budget thresholds enforced in build process
  - Type safety improvements verified with TypeScript compiler
  - No type errors introduced by automated replacements
  - Build optimization reduces initial load time by at least 20%
  - Monitoring system successfully detects and alerts on test issues

---

## 8. Out of Scope for This Release

All existing out of scope items remain unchanged, with following additions:

  - Automated performance optimization based on monitoring data
  - Machine learning-based anomaly detection in logs
  - Custom monitoring dashboard with advanced visualizations
  - Integration with third-party APM tools (New Relic, Datadog)
  - Automated incident response and remediation
  - Advanced log analysis and pattern recognition
  - Real-time performance optimization suggestions
  - A/B testing framework for performance improvements
  - Automated rollback based on performance metrics
  - Custom alerting rules engine with complex conditions
  - Integration with PagerDuty or similar incident management platforms
  - Advanced security monitoring and threat detection
  - Compliance reporting and audit trail generation
  - Multi-region performance monitoring
  - Synthetic monitoring and uptime checks from multiple locations