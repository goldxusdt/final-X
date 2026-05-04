# Pre-Deployment Checklist

Use this checklist before deploying to production.

## Code Quality ✅
- [x] All files pass linting (0 errors, 0 warnings)
- [x] TypeScript compilation successful
- [x] No critical console.log statements in production code
- [x] Error handling implemented for all async operations
- [x] Loading states managed properly

## Security 🔒
- [x] No secrets committed to repository
- [x] `.env` file in `.gitignore`
- [x] Environment variables documented in `.env.example`
- [x] RLS policies enabled in Supabase
- [x] Admin routes protected with authentication
- [x] MFA enabled for admin access
- [x] Input validation on all forms
- [x] CORS configured properly
- [x] Security headers configured in `vercel.json`

## Environment Variables 🔧
- [ ] `VITE_SUPABASE_URL` set in Vercel
- [ ] `VITE_SUPABASE_ANON_KEY` set in Vercel
- [ ] `VITE_APP_URL` updated to production domain
- [ ] `VITE_APP_NAME` set correctly
- [ ] `VITE_GOOGLE_CLIENT_ID` set (if using Google OAuth)
- [ ] SMTP variables set in Supabase Edge Function secrets
  - [ ] `SMTP_HOST`
  - [ ] `SMTP_PORT`
  - [ ] `SMTP_USER`
  - [ ] `SMTP_PASS`
  - [ ] `SMTP_FROM_EMAIL`
  - [ ] `SMTP_FROM_NAME`

## Database 🗄️
- [ ] All migrations applied to production Supabase
- [ ] RLS policies tested and working
- [ ] Database indexes optimized
- [ ] Backup strategy configured
- [ ] Foreign key constraints verified

## Edge Functions ⚡
- [ ] All Edge Functions deployed to Supabase
- [ ] Edge Function secrets configured
- [ ] CORS settings updated for production domain
- [ ] Edge Function logs reviewed

## Frontend 🎨
- [ ] Build command works: `npm run build`
- [ ] Production build tested locally: `npm run preview`
- [ ] All routes accessible
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] Accessibility checks passed

## API Integration 🔌
- [ ] All API endpoints tested
- [ ] Error responses handled gracefully
- [ ] Loading states implemented
- [ ] Timeout handling configured
- [ ] Rate limiting considered

## Performance 🚀
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading for routes
- [ ] Bundle size acceptable
- [ ] Lighthouse score reviewed

## Testing 🧪
- [ ] User registration flow tested
- [ ] User login flow tested
- [ ] Password reset flow tested
- [ ] Deposit creation tested
- [ ] Withdrawal request tested
- [ ] Referral system tested
- [ ] Admin login with MFA tested
- [ ] Admin approval workflows tested
- [ ] Email notifications tested
- [ ] Real-time updates tested

## Monitoring 📊
- [ ] Vercel Analytics enabled
- [ ] Vercel Speed Insights enabled
- [ ] Supabase logging configured
- [ ] Error tracking setup (optional)
- [ ] Uptime monitoring configured (optional)

## Documentation 📚
- [ ] README.md updated
- [ ] API documentation current
- [ ] Deployment guide reviewed
- [ ] Environment variables documented
- [ ] Troubleshooting guide available

## Post-Deployment 🎯
- [ ] Production URL accessible
- [ ] SSL certificate active
- [ ] DNS configured correctly
- [ ] All features working in production
- [ ] Performance metrics baseline established
- [ ] Monitoring alerts configured
- [ ] Backup restoration tested

## Rollback Plan 🔄
- [ ] Previous stable version identified
- [ ] Rollback procedure documented
- [ ] Database migration rollback plan ready
- [ ] Communication plan for downtime

## Team Communication 📢
- [ ] Deployment schedule communicated
- [ ] Stakeholders notified
- [ ] Support team briefed
- [ ] Documentation shared

---

## Deployment Commands

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Verify Deployment
```bash
# Check build locally
npm run build
npm run preview

# Check types
npm run type-check

# Check linting
npm run lint
```

---

## Emergency Contacts

- **Vercel Support**: https://vercel.com/support
- **Supabase Support**: https://supabase.com/support
- **Project Repository**: [Your Git Repository URL]

---

## Notes

Add any deployment-specific notes here:
- 
- 
- 

---

**Last Updated**: 2026-03-13  
**Reviewed By**: [Your Name]  
**Deployment Date**: [To be filled]
