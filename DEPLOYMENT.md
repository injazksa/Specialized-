# Saudi Embassy Services Website - Deployment Guide

## دليل النشر على Vercel أو Netlify

### الحل لمشكلة 404 على Vercel

المشكلة الأكثر شيوعاً عند نشر مواقع React على Vercel هي عدم التعرف على صفحات الـ routing. تم حل هذه المشكلة من خلال ملف `vercel.json`.

### إعدادات Vercel (مهم جداً)

عند الإعداد في Vercel Dashboard، استخدم الإعدادات التالية:

**Option 1: نشر مجلد frontend فقط (الموصى به)**
- **Root Directory**: `frontend`
- **Framework Preset**: `Create React App`
- **Build Command**: `yarn build` (default)
- **Output Directory**: `build` (default)
- **Install Command**: `yarn install` (default)

**Option 2: نشر المشروع كاملاً**
- **Root Directory**: `./` (root)
- **Framework Preset**: `Other`
- **Build Command**: `cd frontend && yarn install && yarn build`
- **Output Directory**: `frontend/build`

### إعدادات Netlify

- **Base directory**: `frontend`
- **Build command**: `yarn build`
- **Publish directory**: `frontend/build` (أو `build` إذا base = frontend)

### Environment Variables (إذا لزم)

لا يحتاج الموقع حالياً لأي environment variables لأنه static frontend فقط.

### الملفات المهمة للنشر

- `vercel.json` - إعدادات Vercel مع rewrites للـ routing
- `frontend/vercel.json` - إعدادات Vercel للمجلد الفرعي
- `frontend/public/_redirects` - إعدادات Netlify
- `netlify.toml` - إعدادات Netlify الكاملة

### بعد النشر

تأكد من:
1. الموقع يفتح بشكل صحيح على الصفحة الرئيسية
2. النصوص العربية تظهر بشكل صحيح (RTL)
3. الصور تحمّل بنجاح
4. الأزرار العائمة (واتساب، اتصال، العودة لأعلى) تعمل

### حل المشاكل الشائعة

**مشكلة: 404 على Vercel**
- الحل: تأكد من وجود `vercel.json` في المجلد المنشور

**مشكلة: الصور لا تظهر**
- الحل: تأكد من أن روابط الصور تعمل (Unsplash, Pexels)

**مشكلة: ترجمة Chrome التلقائية تقلب المعنى**
- الحل: تم إضافة `translate="no"` و `meta name="google" content="notranslate"` لمنع الترجمة التلقائية
