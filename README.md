# Md Iqbal Hossain — academic website

A fresh, dependency-free HTML/CSS implementation inspired by the layout at https://jma712.github.io/publication.html. It recreates the white background, profile sidebar, top navigation, and compact academic lists. No source code, photograph, text, or assets from Jing Ma’s repository were copied. The source repository was public, but no reuse license was identified during inspection on September 27, 2026.

## Preview

Unzip this folder and open index.html or publication.html in your browser. There is no installation or build step. All pages work as local files. Shared profile enhancements use site-settings.js; the basic content and navigation also work without JavaScript.

## Customize

1. Edit site-settings.js for your shared profile, email, Scholar, ORCID, GitHub, and LinkedIn links. Empty optional fields are omitted automatically.
2. Add a photo to assets/profile.jpg and set photo to "assets/profile.jpg". Until then, a monogram is shown. A photo that fails to load leaves the monogram intact.
3. Add your public CV to assets/CV.pdf and set cv to "assets/CV.pdf". This enables the sidebar CV link and the homepage download link.
4. Edit the main content in each .html file. The pages are Home, Research, Publications, Teaching, Awards, Experience, and Service. Publications are ordinary numbered HTML lists, with your name in <strong> tags.
The research summary is in research.html. Its sections cover vision-language model security, retrieval-augmented image generation, multimodal perception, and cooperative autonomous systems. Edit the text directly inside the main element as your work develops.

5. Edit styles.css to change typography, colors, spacing, or the sidebar width. site.js handles the mobile menu and shared profile details.

## Publish on GitHub Pages

1. Create a PUBLIC repository named YOUR_USERNAME.github.io in your own GitHub account. If it already exists, preserve its existing files and back them up before replacing the website.
2. Upload the CONTENTS of this folder, not the zip or an enclosing folder. index.html must be at the repository root. Keep the assets directory and the optional .nojekyll file.
3. In Settings → Pages, choose Deploy from a branch, main, and / (root). Save.
4. GitHub will provide your site URL. Initial publication may take up to 10 minutes. Later commits to main update the site automatically.
5. Check publication links, contact links, CV, and mobile navigation after publication.

Official guide: https://docs.github.com/en/pages/quickstart

## Content review before publishing

This is a personalized first draft, not a complete CV transcription. The biography, research, teaching, awards, experience, and service sections use professional details already shared in the conversation. Review the wording, current candidacy status, official degree/program title, course titles, dates, and roles before publishing. The photo, CV, GitHub, and LinkedIn were not supplied; those optional items are intentionally absent. No private contact details were added. The email and ORCID were found in public publication metadata.

The publication page deliberately says SELECTED publications and includes three verified papers. Add your complete publication and patent list from your latest CV. No under-review manuscripts or unverified acceptance claims are included.

Publication sources:
- https://www.sciencedirect.com/science/article/abs/pii/S0893608026002261
- https://pubmed.ncbi.nlm.nih.gov/41780272/
- https://link.springer.com/article/10.1007/s11042-026-21339-x
- https://arxiv.org/abs/2511.13545
- https://openaccess.thecvf.com/content/WACV2025/papers/Perla_Are_Exemplar-Based_Class_Incremental_Learning_Models_Victim_of_Black-Box_Poison_WACV_2025_paper.pdf

The website is ready for upload, but has not been deployed to a GitHub account.
