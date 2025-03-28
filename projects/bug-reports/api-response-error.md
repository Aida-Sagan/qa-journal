# Bug: API returns 500 instead of 400 when email is missing

**Environment:** Prod

**Steps:**
1. Send POST request to `/api/login` without email field

**Expected Result:** 400 Bad Request with validation error
**Actual Result:** 500 Internal Server Error

**Severity:** Critical
**Priority:** High