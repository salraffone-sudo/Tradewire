repo: salraffone-sudo/RJ_Cost_Intelligence
branch: main

## Last sync

date: 2026-08-26T18:01:31Z

### Updated in this project

- Added a Supabase-backed shared data layer so multiple users see the same projects
- Added a live sync status pill and a Shared Database & Sync setup panel
- Kept local storage as an offline cache with a queue that flushes on reconnect
- Repo currently holds one deployed bundle (`index.html`); project source is `dashboard_v7.html`

## Screen map

| Project screen | Repo files |
| --- | --- |
| Dashboard (metrics + charts) | index.html |
| Add Project | index.html |
| All Projects | index.html |
| Project detail / chart pop-outs | index.html |
| Shared Database & Sync panel | (new in dashboard_v7.html, not yet in repo) |

## Notes

The repository holds the built single-file bundle. Authoring happens in
`dashboard_v7.html` in this project; `RJDA Cost Intelligence Dashboard.html`
is the standalone export that gets deployed as `index.html`.
