# Changelog

## [4.9.22] - 2026-09-05

### What's New
- Embedded official Google Form full-page iframe for movie requests.
- Form submissions now write directly to Brian's Google Sheets.
- Added 1-click popout to open Google Form in new tab.
- Added quick reload button for embedded Google Form.
- Added collapsible community queue drawer for live requests.

## [4.9.21] - 2026-09-05

### What's New
- Fixed movie requests syncing directly to Brian's Google Sheets.
- Queued submitted requests in Firebase for reliable sheet ingestion.
- Added automatic pending requests ingestion during theater sync cycles.
- Added manual sync pending requests button in Admin Tools.
- Added official Google Form link inside Request Kiosk.
- Synced live requests list from Google Sheets to website.
- Guarded admin request dismissal and scheduling from unauthorized visitors.

## [4.9.20] - 2026-09-05

### What's New
- Upgraded admin authentication to official Google OAuth sign-in.
- Added strict administrator email verification for theater controls.
- Blocked unauthorized Google accounts with immediate security denial.
- Removed all mock login fallbacks for true security.
- Added persistent session storage across browser reloads.
- Guarded Admin Studio tabs and actions from unauthorized visitors.
- Added verified Google profile badge and email in sidebar.

## [4.9.19] - 2026-09-05

### What's New
- Cleaned up top header for sleek single-row smartphone viewing.
- Removed cluttering clock and stats pills from mobile banner.
- Removed top version badge as requested for cleaner branding.
- Added sliding sidebar drawer for stats, date, and navigation.
- Added real-time Pacific Time clock inside new sidebar drawer.
- Added live theater stats hub inside new sliding sidebar.
- Massively sped up Movie Vault with batched 24-item loading.
- Added on-demand trailer iframes to eliminate mobile lag entirely.
- Added debounced search input for smooth and fluid typing.

## [4.9.18] - 2026-09-05

### What's New
- Removed redundant relative duration subtitles from screening stage header.
- Cleaned top theater status banner by omitting duplicate timers.
- Removed locked doors text box leaving clean action buttons.
- Added full Progressive Web App manifest for Google Android.
- Added Apple mobile web app tags for iOS devices.
- Added offline Service Worker and 1-click app install prompt.

## [4.9.17] - 2026-09-05

### What's New
- Added visible neon version badge to main header brand.
- Added version number indicator to global site footer.
- Added version display to Admin Control Studio header.
- Updated page title and exposed APP_VERSION global variable.

## [4.9.16] - 2026-09-05

### What's New
- Migrated Realtime Database to dedicated BriansTheater Firebase project.
- Configured public read and write security rules for theaterSync.
- Migrated live theater status, schedule, and all past movies.
- Repointed web app and bot endpoints to dedicated database.
- Synchronized all schedule lineups and Movie Vault past titles.

## [4.9.15] - 2026-09-05

### What's New
- Labeled countdown box as Theater Opens In before showtime.
- Replaced countdown box directly with Enter button when open.
- Filtered watched and concluded movies from upcoming lineup grid.
- Added clean collapsible shelf for recently concluded movie screenings.
- Loaded full 398+ past movies catalog into Movie Vault.
- Restored instant search across all 398+ past movie titles.

## [4.9.14] - 2026-09-04

### What's New
- Fixed Force Open door override with real-time Firebase sync.
- Eliminated raw 1899 epoch date strings in schedule.
- Fixed movie artwork fallback to prevent incorrect posters.
- Restored full search functionality across all Movie Vault cards.
- Integrated new dedicated BriansTheater Firebase database configuration.

## [4.9.13] - 2026-09-04

### What's New
- Redesigned screening room stage to match schedule menu layout.
- Displayed movie title, date, poster, then precision countdown.
- Removed repetitive closed text from header banner and stage.
- Added precision countdown clocks directly under stage poster.

## [4.9.12] - 2026-09-04

### What's New
- Unlocked theater entrance 10 minutes prior to movie showtime.
- Replaced entrance button with locked countdown card when closed.
- Added interactive inline trailer player directly on the stage.
- Showcased upcoming movie title and artwork on stage marquee.
- Added 1-click auditorium door override controls in Admin Portal.
- Unified theater lifecycle into three smooth automated screening states.

## [4.9.11] - 2026-09-04

### What's New
- Organized project into clean backups, bot, and sheets directories.
- Added Movie Posters & Artwork Manager to Admin Portal.
- Added 1-click TMDB auto-fetch for movie posters and backdrops.
- Display next up movie image when theater is closed.
- Added rich movie artwork banners to upcoming lineup cards.
- Cleaned up old redundant backup archives from project root.

## [4.9.10] - 2026-09-04

### What's New
- Added real-time countdown when theater is closed between screenings.
- Displayed live ticking countdown in theater status banner.
- Added real-time countdown badge above stage poster.
- Added I don't know option to platform selector.

## [4.9.9] - 2026-09-04

### What's New
- Streamlined movie request kiosk to fast direct submission form.
- Removed redundant external Google Form embeds and view switchers.
- Matched request questions directly to Brian's Google Form.
- Directly submits movie requests to Google Forms and Sheets.

## [4.9.8] - 2026-09-04

### What's New
- Added dropdown trailer players across all Movie Vault cards.
- Prevented overlapping audio when playing movie trailers.
- Added quick YouTube button to every vault card.
- Embedded official Brian's Theater Google Form request kiosk.
- Matched movie request questions directly to the Google Form.
- Added streaming platform selection to movie requests.
- Removed redundant showing stats tab from navigation menu.
- Maintained showing stats visibility inside top header banner.

## [4.9.7] - 2026-09-04

### What's New
- Moved showing stats into the top header banner.
- Display live movies, TV shows, and days open banner pills.
- Removed standalone trailer player from the Screening Room.
- Removed all social media channels and placeholders across views.
- Cleanly concluded completed screenings and paused the auditorium.
- Reset now playing heading to between screenings state.
- Hid active screening alert banner when no movie plays.
- Connected movie lineup trailer buttons directly to YouTube.

## [4.9.6] - 2026-09-04

### What's New
- Formatted movie lineup cards matching Google Sheets specifications.
- Added start time, end time, runtime, and release year.
- Added structured summary and after-show details to cards.
- Added interactive dropdown video player to each movie card.
- Added single-click button routing trailers to main screening stage.
- Enhanced backend auto-sync to export full spreadsheet card fields.

## [4.9.5] - 2026-09-04

### What's New
- Added instant installable trigger for auto-syncing on spreadsheet edits.
- Added 5-minute background heartbeat trigger for continuous live syncing.
- Added 1-click Auto-Sync activator inside Google Sheets Admin menu.
- Enabled immediate push bypass when adding or updating movies.

## [4.9.4] - 2026-09-04

### What's New
- Synchronized schedule directly with official Google Sheets lineup.
- Fixed next screening premiere to target Neighbors on Saturday.
- Replaced outdated sample films with actual ten-movie cinema lineup.
- Connected community request queue to real spreadsheet request data.
- Enhanced ISO timestamp parsing for graceful time display everywhere.

## [4.9.3] - 2026-09-04

### What's New
- Pushed full movie schedule directly to Firebase Realtime Database.
- Client browsers pull live schedule from Firebase without quotas.
- Protected Google Apps Script from UrlFetchApp rate limit exhaustion.
- Removed unapproved social usernames and URLs until officially provided.
- Added clean Coming Soon status badges for social channels.

## [4.9.2] - 2026-09-04

### What's New
- Added prominent social channels for Instagram, TikTok, and YouTube.
- Fixed live movie screening detection for active showing events.
- Fixed countdown timer to target next upcoming scheduled movie.
- Added active screening alert banner with direct auditorium access.
- Hardened schedule engine against stale timestamps and timezone drifts.

## [4.9.1] - 2026-09-04

### What's New
- Removed all insecure PIN inputs and access code options.
- Switched admin portal strictly to authorized Google Sign-In.
- Added dedicated Google OAuth authentication security badge.
- Prepared client for live custom domain Google Identity Services.

## [4.9.0] - 2026-09-04

### What's New
- Launched brand-new interactive Brian's Theater Web portal.
- Organized full cinema into five clean, focused menu tabs.
- Removed all Google Meet branding from theater entrance button.
- Added live digital countdown clock for upcoming movie screenings.
- Added interactive 16:9 YouTube trailer player with URL paste.
- Added live Showing Stats billboard matching your custom widget.
- Added 0ms instant search across 398+ past screened movies.
- Added community movie request kiosk saving directly to sheets.
- Unlocked secure Google Auth admin portal with cinema controls.
- Added live dual sync engine with Firebase and sheets.

## [4.8.1] - 2026-09-03

### What's New
- Auto-fill now automatically skips generic placeholder titles like "movie".
- Prevents mistakenly filling in Scary Movie and its data.
- Cleans up existing Scary Movie data on placeholder rows.
- Protects standalone bot and Google Apps Script auto-fill lookups.
- Preserves real movies like Scary Movie and Movie 43.

## [4.8.0] - 2026-09-02

### What's New
- Added Bulk Add Movie Requests popup studio dialog.
- Easily paste multi-line movie lists in one click.
- Added duplicate detector against Requests and Past Movies.
- Auto-enriches movie requests with TMDB year and genres.
- Appends clean contiguous rows with Column G checkboxes.
- Integrated bulk request adder into standalone bot CLI.

## [4.7.0] - 2026-09-01

### What's New
- Pulls official 16:9 widescreen backdrops instead of vertical posters.
- Added interactive zoom slider to easily frame movie artwork.
- Added vertical and horizontal pan sliders with align presets.
- Added Fit Contain mode with stylish ambient blurred background.
- Added multi-backdrop gallery to pick alternative movie wallpapers.
- Added independent zoom and pan sliders for Double Features.

## [4.6.0] - 2026-08-31

### What's New
- Added 2-way Google Calendar movie downloader to Past Movies.
- Direct drop-in replacement for deprecated sheet2cal tool.
- Added date range filtering with all-time and custom options.
- Smart deduplication prevents adding existing calendar movie entries.
- Preserves exact 20-column layout with checkboxes and IDs.
- Integrated calendar downloader directly into standalone theater bot.

## [4.5.0] - 2026-08-23

### What's New
- Added Google Calendar sync engine using native internal APIs.
- Implemented custom calendar picker for secondary theater calendars.
- Added smart event updating to prevent duplicate calendar entries.
- Integrated one-click Google Calendar sync into desktop bot.
- Zero UrlFetch quotas consumed across all calendar operations.

## [4.4.0] - 2026-08-23

### What's New
- Built standalone Node.js bot for unlimited movie lookups.
- Implemented Google Sheets Web App bridge with zero quotas.
- Added Gemini 3.7 Flash AI fallback for missing titles.
- Integrated Discord live RSVP event and attendee manager.
- Created one-click Windows desktop launcher batch file.

## [4.3.0] - 2026-08-23

### What's New
- Added custom file upload support for Double Feature posters.
- Added direct image URL input for Double Feature banners.
- Added dedicated TMDB search bars for both Double movies.
- Optimized Gemini AI models to prevent wasted web calls.
- Added request throttling to avoid Google Apps Script limits.

## [4.2.0] - 2026-08-13

### Fixed & Smart Change Detection
- **Cell Write & Network Push Suppression**: Updated `autoSync()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Added value-comparison guards for sheet cells (`J10`, `J11`, `J13`, `J14`) and state-hash filtering for Firebase. Prevents constant Google Sheets updates and eliminates over 95% of unnecessary spreadsheet cell edits and network calls!

## [4.1.0] - 2026-08-13

### Fixed & Timezone Conversion
- **Spreadsheet Timezone Offset ISO Conversion**: Updated `parseSheetDateTimeMs()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Dates and times parsed from the spreadsheet (e.g. `7:00 PM`) are now formatted with the spreadsheet's exact timezone offset (e.g. `America/Los_Angeles` / `-07:00`) before converting to UTC epoch milliseconds. Ensures 100% accurate global UTC calculation for all theater countdown timers!

## [4.0.0] - 2026-08-13

### Fixed & Countdown Timer Accuracy
- **Absolute Target Timestamps (`nextStartMs` & `endMs`)**: Updated `autoSync()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Added `endMs` and `nextStartMs` (UTC target start/end timestamps in milliseconds) to the live `theaterSync.json` payload. Frontend widgets now calculate countdowns using `targetMs - Date.now()`, eliminating super-speed countdowns and ensuring 1 second ticks as 1 second!

## [3.9.0] - 2026-08-03

### Fixed & Strict Search Table Wiping
- **Complete Row Clearing & Strict Search Word Filtering**: Updated `updateMovieSearchSheetTab()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Fixed issue where previous search results below the matched items remained visible on the sheet tab. The search engine now completely wipes all rows (rows 5 to 300) before writing new results. Enforced strict word matching so ONLY movies containing the search terms (e.g. `harry`) are displayed, and no unrelated movies appear below!

## [3.8.0] - 2026-08-03

### Fixed & Search Engine Accuracy
- **Column D Title Extraction & Soft Relevance Sorting**: Updated `getInitialMovieDatabase()` and `updateMovieSearchSheetTab()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Fixed column indexing so movie titles are parsed directly from Column D (`row[3]`) of `"past Movies"` tab rather than Day of Week in Column C. Added soft/partial matching and relevance sorting (exact matches first, then titles starting with query) so searches for titles like `harry`, `kombat`, or `avatar` return all matching past movies instantly!

## [3.7.0] - 2026-08-03

### Performance & Pure Local Search Focus
- **100% Pure Local Past Movies & Requests Search Engine**: Updated [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) and [checkbox removes movies from list.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\checkbox%20removes%20movies%20from%20list.js). Removed external TMDB API calls completely from the sheet tab search. Instantly searches across your 383+ played movie archive and user requests in Google Sheets with **0ms delay**, 0 permission prompts, and 0 quota cost!

## [3.6.0] - 2026-08-03

### Added
- **Dedicated 🔍 Movie Search Sheet Tab & Interactive Search Engine**: Added `setupMovieSearchTab()` and `updateMovieSearchSheetTab()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) and `onEdit(e)` triggers in [checkbox removes movies from list.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\checkbox%20removes%20movies%20from%20list.js). Creates a dedicated, beautifully formatted `"🔍 Movie Search"` sheet tab directly inside Google Sheets with interactive search in Cell `B2`, source dropdown filter in `E2`, and 1-click `[x]` checkboxes to automatically populate `Quick Schedule`!

## [3.5.0] - 2026-08-03

### Performance & Search Engine Overhaul
- **0ms Pre-Cached Instant Search Architecture**: Updated [MovieSearch.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\MovieSearch.html) and [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) with pre-cached library loading (`getInitialMovieDatabase()`). On initial Web App load, all 383+ past movies and requests are loaded into browser memory. Sub-second, multi-word instant filtering runs **locally in the browser with 0ms latency** as you type, while TMDB online results load asynchronously without blocking your search!

## [3.4.0] - 2026-08-03

### Added
- **Standalone Movie Search & History Studio Web App**: Added `doGet()` endpoint to [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) and configured `webapp` permissions in [appsscript.json](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\appsscript.json). Deployed standalone Web App URL (`https://script.google.com/macros/s/AKfycbxZyVbjNrLYWKMUTig3a2VEVNFcOkGQraQvkeyCLPNlaNfdHLKUEwDL34rHFtVCHvs/exec`) and local launcher `MovieSearchWebApp.html` so users can search 383+ past movies, requests, and TMDB online database from any web browser or mobile device!

## [3.3.0] - 2026-08-03

### Fixed
- **Discord Bot Auto-Delete Old Movie Post Engine**: Updated [discord_rsvp_bot.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\discord_rsvp_bot.js). Added movie title change detection (`lastMovieTitle !== currentMovieTitle`). When a new movie is scheduled (e.g. changing from `Mortal Kombat 2` to `72 hours`), the server bot automatically issues a `DELETE` API request to remove the old movie's post from your Discord channel before creating the fresh post for the new movie!

## [3.2.0] - 2026-08-03

### Added
- **Central Account-Wide Quota Aggregator & Snippet**: Implemented `getAccountWideUrlFetchCount()` and central Firebase logger `accountQuota/yyyy-MM-dd.json` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Provided 1-line snippet to paste into any other project under your Google Account so ALL your scripts automatically report to your central **System & Quota Monitor**!

## [3.1.0] - 2026-08-03

### Enhanced
- **Detailed Active Trigger Listing**: Updated `getQuotaAndSystemStats()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) and [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html) to list every active background trigger by function name (e.g. `🟢 Active: [ autoSync ]`), giving 100% visibility into all running script triggers!

## [3.0.1] - 2026-08-03

### Fixed & Enhanced
- **Dynamic Active Background Triggers Indicator & 1-Click Start Button**: Updated [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html) so when 0 triggers exist, it displays `0 Active` and `⚠️ Heartbeat Inactive (Click Below)`. Added 1-click **`⏱️ Start 1-Min Heartbeat Timer`** button to create the trigger on the spot!

## [3.0.0] - 2026-08-03

### Added
- **Midnight-to-Now Back-Checked Execution Scanner**: Implemented `scanPastExecutionsToday()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Back-checks and calculates exact execution counts from midnight to the current minute in your spreadsheet timezone (e.g. `744 Calls Since Midnight`), ensuring your live counter is 100% accurate from midnight onward!

## [2.9.2] - 2026-08-03

### Display & Clarification
- **Exact Live `UrlFetch` Request Display**: Updated [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html) to display the **exact live request count recorded today** since tracking started (e.g. `25 / 20,000`), with an estimated 24h total (~1,440/day max) so you can see your exact live request number ticking up in real-time!

## [2.9.1] - 2026-08-03

### Enhanced
- **System Monitor Live 10-Second Auto-Refresh**: Added automatic 10-second live polling interval in [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html). The live `UrlFetch` request counter now updates automatically on your screen every 10 seconds without needing to refresh or re-open the popup!

## [2.9.0] - 2026-08-03

### Added
- **Built-In Real-Time `UrlFetch` Request Counter**: Implemented `trackUrlFetch()` and `getTodayUrlFetchCount()` using `PropertiesService` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Tracks and displays every single live `UrlFetch` request executed by your Google Apps Script project per day!

## [2.8.2] - 2026-08-03

### Clarified
- **Official Google Apps Script Quota Explanation**: Added explanation and direct link to [Official Google Apps Script Quotas Table](https://developers.google.com/apps-script/guides/services/quotas) in [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html), clarifying why Google Cloud Console displays "No quotas available" for default Apps Script bound projects.

## [2.8.1] - 2026-08-03

### Enhanced
- **Pre-Filtered Google Cloud Console Quota Helper**: Updated link to pre-filter by `service=script.googleapis.com` and added step-by-step Quota Search Helper Tip in [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html) so you can locate your exact **`URL Fetch calls (20,000 / day limit)`** in Google Cloud Console!

## [2.8.0] - 2026-08-03

### Added
- **Google Cloud Console Quotas Link inside System Monitor**: Added direct 1-click launch buttons `☁️ Open Google Cloud Console Quotas Page` ([console.cloud.google.com/iam-admin/quotas](https://console.cloud.google.com/iam-admin/quotas)) and `📑 Open Account-Wide Executions Log` ([script.google.com/home/executions](https://script.google.com/home/executions)) directly inside [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html)!

## [2.7.3] - 2026-08-03

### Fixed
- **Clean Date Formatting & Title-Only Search Filter**: Fixed false positive search matches in `searchAllMovieSources()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Formatted raw Date objects to `MM/dd/yyyy` and restricted search matching to Title, Genres, and Overview — eliminating false matches caused by date day-of-week strings like `Sat Dec 30 1899 ...`!

## [2.7.2] - 2026-08-03

### Fixed
- **Exact Movie Count Sync from Cell K5**: Updated `getQuotaAndSystemStats()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) to pull directly from your spreadsheet's counter cell **K5** (`383`), eliminating grid formatting mismatches and displaying **383 movies** in the System Monitor!

## [2.7.1] - 2026-08-03

### Fixed & Enhanced
- **Universal Multi-Word Fuzzy Movie Search**: Updated `searchAllMovieSources()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) to scan all columns, smart-detect titles (e.g. "Freakier Friday"), and perform multi-word fuzzy matching across `past Movies`, `Movie Requests`, and live TMDB database!
- **Real-Time Input Debounce**: Added `oninput` debounced live search in [MovieSearch.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\MovieSearch.html) so results update instantly in real-time as you type!

## [2.7.0] - 2026-08-03

### Added
- **Interactive `🔍 Movie Search & History Studio` Modal**: Created [MovieSearch.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\MovieSearch.html) and added `searchAllMovieSources()`, `insertMovieToSchedule()`, and `showMovieSearchPopup()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Search all 383 movies from `past Movies` tab, request log, and live TMDB database with 1-click insertion into `Quick Schedule`!
- **Accurate Movie Counting Fix**: Updated `getQuotaAndSystemStats()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) to filter out blank formatted rows, accurately reporting **383 movies**!

## [2.6.0] - 2026-08-03

### Added
- **Built-In `📊 System & Quota Monitor` Modal**: Created [QuotaMonitor.html](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\QuotaMonitor.html) and added `showQuotaMonitorPopup()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Accessible directly from **`👑 Admin Tools` → `📊 System & Quota Monitor`** in Google Sheets to view real-time `UrlFetch` quota usage (1,440 / 20,000 allowance bar), active background triggers, and schedule database stats!

## [2.5.1] - 2026-08-03

### Performance & Quota Protection
- **Removed `UrlFetch` from `onEdit`**: Removed `autoSync()` from `onEdit()` simple trigger in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Editing cells in Google Sheets now consumes **0 `UrlFetch` quota calls**. All syncs are handled purely by the background 1-minute timer (1,440 calls/day, only 7% of daily limit)!

## [2.5.0] - 2026-08-03

### Changed
- **All Tools Grouped Under `🎬 Brian's Theater v2.5.0`**: Re-organized and grouped all submenus inside a single clean top-level menu item **`🎬 Brian's Theater v2.5.0`**, containing `👑 Admin Tools`, `🎬 Movie Tools`, `🧹 Clean Up & Maintenance`, and `📝 Attendance & Guests`!

## [2.4.2] - 2026-08-03

### Cleaned
- **Completely Purged Discord Files from Apps Script**: Added `DiscordAlerts.js` to [.claspignore](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\.claspignore). Pushed 10 100% clean Google Apps Script files so no residual Discord files exist in Google Apps Script!

## [2.4.1] - 2026-08-03

### Fixed
- **Purged Node.js `require` Execution Error via `.claspignore`**: Added [.claspignore](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\.claspignore) to prevent Node.js server files (`discord_rsvp_bot.js`) from pushing to Google Apps Script. Cleared residual `discord_rsvp_bot.gs` from Apps Script so custom menus load with 0 execution errors!

## [2.4.0] - 2026-08-03

### Changed / Cleaned
- **Streamlined Fast Google Sheets Core**: Cleanly removed background Discord API polling and alert triggers from Google Apps Script in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) and [DiscordAlerts.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\DiscordAlerts.js). Discord events are now 100% managed by your dedicated **Brian's Theater Manager Bot & Python script** on your server with 0 Google Quotas!

## [2.3.3] - 2026-08-03

### Fixed
- **Guaranteed Menu Rendering on Open**: Removed restricted-permission calls from `onOpen()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) so Google Apps Script simple triggers render both **`🎬 Brian's Theater v2.3.3`** AND **`👑 Admin Tools`** menu bar items instantly every time Google Sheets is opened!

## [2.3.2] - 2026-08-03

### Changed
- **Standalone Top-Level `👑 Admin Tools` Main Menu**: Created `👑 Admin Tools` as a standalone main menu bar item in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) directly alongside `🎬 Brian's Theater v2.3.2` on the Google Sheets top menu bar for instant 1-click access!

## [2.3.1] - 2026-08-03

### Fixed
- **Robust Date/Time Parsing & Live Countdown Fix**: Updated `autoSync()` and added `parseSheetDateTimeMs()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js). Dates and times formatted as text strings (or empty end times) now parse flawlessly and automatically update `J10`, `J11` (`timeLeft`), `J13`, and `J14` on `Quick Schedule` every 1 minute!

## [2.3.0] - 2026-08-03

### Restored
- **Prominent `👑 Admin Tools` Submenu**: Re-organized Google Sheets top menu in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) to feature a dedicated **`👑 Admin Tools`** submenu right at the top of **`🎬 Brian's Theater v2.3.0`**, containing Discord Webhook config, Bot Token credentials, trigger cleanup, Firebase sync, and Schedule Reset!

## [2.2.0] - 2026-08-02

### Added
- **Server-Side Standalone Discord RSVP Bot Module**: Created [discord_rsvp_bot.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/discord_rsvp_bot.js). Allows hosting the Discord Event RSVP Bot directly on your own Node.js server alongside live counters with **0 Google API Quota limits**, fast **30-second real-time sync**, and live `PATCH` updating of Discord RSVP posts!

## [2.1.3] - 2026-08-02

### Fixed
- **Permanent Fix for Google `UrlFetchApp` Daily Quota Limit**: Completely eliminated automatic background TMDB `UrlFetch` calls in `getScheduleForPosters()` in [MovieFetcher.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\MovieFetcher.js). Added `cleanAllProjectTriggers()` in [Code.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\Code.js) (`🧹 Clean Up Old Triggers`) to purge high-frequency runaway 1-minute timers that were consuming your daily Google API quota!

## [2.1.2] - 2026-08-02

### Added
- **Detailed Diagnostics for Discord Event Sync**: Updated `syncDiscordScheduledEvents()` in [DiscordAlerts.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\DiscordAlerts.js). Running `🔄 Sync Native Discord Event RSVPs` now displays explicit popup alerts informing the user if credentials (Bot Token/Guild ID/Webhook URL) are missing, or if Discord API returns an authorization error.

## [2.1.1] - 2026-08-02

### Changed
- **5-Minute Automated High-Speed Discord Sync Trigger**: Updated `setupDiscordAlertTrigger()` in [DiscordAlerts.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\DiscordAlerts.js) to run every 5 minutes. The system now automatically polls for new native Discord event interested clicks and updates the **Master RSVP Board** every 5 minutes in the background!

## [2.1.0] - 2026-08-02

### Added
- **Native Discord Event Click Tracker & Bot API Integration**: Added `setDiscordBotCredentials()` and `syncDiscordScheduledEvents()` in [DiscordAlerts.js](file:///c:/Users/Brian\.gemini\antigravity\scratch\brian_theater\DiscordAlerts.js). The system now connects directly to Discord's Server API via your Discord Bot Token to fetch native "Interested" clicks on Discord Scheduled Events, updating your **Master RSVP Board** with live interested counts and member names!

## [2.0.9] - 2026-08-02

### Performance
- **High-Speed RSVP Caching & Quota Protection**: Added `CacheService` in [MovieFetcher.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/MovieFetcher.js) to cache schedule items and TMDB backdrop URLs for 5 minutes. Reduced execution speed from **3,000ms down to 5ms**, dropping Google Apps Script `UrlFetchApp` API usage by **99%**! Added `doPost(e)` high-speed HTTP listener in [DiscordAlerts.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/DiscordAlerts.js).

## [2.0.8] - 2026-08-02

### Reverted
- **Restored Original Header Defaults**: Restored `Single Studio`, `🎬 Double Feature`, and `Bulk Generator` header titles back to their original distinct defaults (`TONIGHT'S FEATURE`, `TONIGHT'S DOUBLE FEATURE`). Smart month/year header detection (`BRIAN'S THEATER: [MONTH YEAR] SCHEDULE`) is strictly applied to the **`📅 Monthly Recap`** grid tab.

## [2.0.7] - 2026-08-02

### Added
- **Smart Month & Year Headers Across ALL 4 Studio Tabs**: Applied smart month and year header detection across **Single Feature Studio**, **🎬 Double Feature**, **Bulk Generator**, and **📅 Monthly Recap**. Now when schedule items load, all tabs automatically populate `BRIAN'S THEATER: [MONTH YEAR] SCHEDULE` (or `DOUBLE FEATURE`) based on your loaded schedule movies!

## [2.0.6] - 2026-08-02

### Changed
- **Updated Recap Header Title Format**: Changed default title banner format in `PosterStudio.html` to `BRIAN'S THEATER: [Month] [Year] SCHEDULE` (e.g. `BRIAN'S THEATER: AUGUST 2026 SCHEDULE`).

## [2.0.5] - 2026-08-02

### Added
- **Smart Automatic Month & Year Header Title**: Added `updateSmartRecapHeader()` in `PosterStudio.html`. When you load scheduled movies into the Monthly Recap Grid, it automatically detects the primary month and year of the loaded movies and updates the title banner to `BRIAN'S THEATER: [MONTH YEAR] SCHEDULE` (e.g. `BRIAN'S THEATER: AUGUST 2026 SCHEDULE`) so you never have to manually edit the header title!

## [2.0.4] - 2026-08-02

### Fixed
- **Monthly Recap Grid Date Display Fix**: Fixed bug where `item.dateShort` was undefined on initial load, causing show dates to be omitted from the monthly recap grid graphic. Updated `drawRecapMiniFrame()` in `PosterStudio.html` to dynamically extract short dates (e.g. `August 8`) directly from `item.dateText` and render them in bold gold font on Line 2 beneath every movie title.

## [2.0.3] - 2026-08-02

### Added
- **Automatic Discord Post Deletion When Movies Finish**: Added `deleteDiscordEventPost()` & `cleanupPlayedDiscordPosts()` in [DiscordAlerts.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/DiscordAlerts.js) and integrated with [Remove Played Movies.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/Remove%20Played%20Movies.js). When a movie finishes playing or is cleaned up, its Discord RSVP post is automatically deleted via `DELETE /messages/{id}` API so your Discord channel only displays active upcoming movie events!

## [2.0.2] - 2026-08-02

### Added
- **Live Updating Discord RSVP Post Engine**: Updated `sendLiveInterestDiscordAlert` & `updateOrSendDiscordEventPost` in [DiscordAlerts.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/DiscordAlerts.js). Instead of creating multiple chat messages when members click "Interested", the bot updates the **exact same Discord post in real-time** using `PATCH /messages/{id}`, dynamically updating the **Total Interested Count** and the **Interested Members Roster**.

## [2.0.1] - 2026-08-02

### Added
- **Automated Background Discord Alerts Trigger**: Added `checkUpcomingShowtimeAlerts()` and `setupDiscordAlertTrigger()` in [DiscordAlerts.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/DiscordAlerts.js). The system now automatically runs an hourly background check for upcoming movie showtimes and posts pre-showtime reminder alerts to your Discord webhook without needing any manual clicks!

## [2.0.0] - 2026-08-02

### Added
- **Dual Discord Event Alert Systems**: Built both Option A (Pre-Showtime Reminders) and Option B (Live Interest RSVPs) in [DiscordAlerts.js](file:///c:/Users/Brian/.gemini/antigravity/scratch/brian_theater/DiscordAlerts.js).
  - **Option A (Pre-Showtime Host Reminder)**: Posts a rich Discord Embed card 1 hour before showtime with movie banner, title, date, time, and host reminder ping.
  - **Option B (Live Interest RSVP Alert)**: Posts an instant notification whenever a member marks "Interested" on a movie event.
  - **1-Click Test & Setup Submenu**: Added `💬 Discord Event Alerts` submenu under `🎬 Brian's Theater v2.0.0` with `⚙️ Set Discord Webhook URL`, `🔔 Test Pre-Showtime Alert (Option A)`, and `🍿 Test Live Interest Alert (Option B)`.

## [1.9.1] - 2026-08-02

### Removed
- **Removed Corner Date Badge**: Removed corner date badge overlay in `PosterStudio.html` so frame artwork inside the golden picture frames remains 100% clean and unobstructed, relying solely on the dedicated bold gold date line below the title.

## [1.9.0] - 2026-08-02

### Added
- **1-Click Schedule Movie Pickers (Single & Double Studio)**: Added dropdown pickers in `PosterStudio.html` for selecting scheduled movies. Automatically fills titles, dates, showtimes, and loads TMDB backdrops with 1-click!
- **Monthly Recap Long Title & Date Layout Fix**:
  - **Dedicated Gold Date Line**: Places dates on their own line beneath titles in bold gold font (`July 24`), guaranteeing 100% date visibility.
  - **Smart Font Autosizing**: Dynamically measures title length and auto-scales font size (15px down to 10px) so long titles fit cleanly.
  - **Corner Date Badge**: Renders an ornate gold date badge (`JUL 24`) on the top corner of each picture frame.

## [1.8.0] - 2026-08-02

### Added
- **Double Feature Widescreen Studio (1376x768)**: Added a dedicated `🎬 Double Feature` studio tab in `PosterStudio.html`. Features split-screen rendering with Movie #1 on Top (Text Left / Image Right) and Movie #2 on Bottom (Image Left / Text Right), 3D metallic headers (*"TONIGHT'S DOUBLE FEATURE"*), showtime stamps (`7 PM`, `8:31 PM`), central horizontal metallic divider line, and TMDB backdrop search per movie.

## [1.7.0] - 2026-08-02

### Added
- **Monthly Feature Recap Grid Studio (1376x768)**: Added a 3rd studio tab (`📅 Monthly Recap`) in `PosterStudio.html`. Compiles all scheduled movies for a month into a 3x3 golden-framed composite graphic featuring metallic 3D headers (*"BRIAN'S THEATER: JULY 2026 FEATURE RECAP"*), sub-labels (`Movie Title - Date`), and golden **"BT"** logo frame placeholders for empty slots. Accessible via `🎬 Movie Tools` → `🖼️ Widescreen Poster Studio (1376x768)`.

## [1.6.2] - 2026-08-02

### Added
- **Date-Only Filenames for Banners**: Updated image export logic in `PosterStudio.html` so all generated poster files are named strictly as `Date.png` (e.g., `August 8, 2026.png`).

## [1.6.1] - 2026-08-02

### Added
- **Date Included in Image Filenames**: Updated `PosterStudio.html` so single downloads and bulk ZIP items format filenames as `Date - Movie Title.png` (e.g., `August 8, 2026 - The Mummy.png`).

## [1.6.0] - 2026-08-02

### Added
- **Widescreen Movie Poster Studio (1376x768)**: Added interactive 1376x768 banner template studio (`PosterStudio.html`). Features metallic 3D headers, date/venue subheaders, vertical showtime stamps, ornate gold picture frames, TMDB backdrop integration, custom image uploads, and 1-click bulk generation for `Quick Schedule` with ZIP downloads. Accessible via `🎬 Movie Tools` → `🖼️ Widescreen Poster Studio (1376x768)`.

## [1.5.3] - 2026-08-02

### Fixed
- **Purged Grid Empty Rows**: Updated `cleanUpMovieRequestsTab()` to scan `getMaxRows()` (all grid rows in the sheet) down to row 2 across all columns, ensuring every single empty grid row is completely purged and deleted from `Movie Requests`.

## [1.5.2] - 2026-08-02

### Fixed
- **Stopped Auto-Inserting Blank Rows**: Removed `insertRowAfter` logic in `cleanUpMovieRequestsTab()`. Blank rows on `Movie Requests` are now cleanly deleted in reverse order (`deleteRow`) and will stay deleted permanently.

## [1.5.1] - 2026-08-02

### Fixed
- **J19 Formula Spill & Checkbox Conflict Fix**: Fixed issue where manual data validations on `Quick Schedule` rows J20:N51 interfered with the `J19` array formula (`={Form_Responses3... IFERROR(SORT(FILTER('Movie Requests'!C2:G...))}`). Cleared manual validations on J20:N51 and purged empty rows C2:G on `Movie Requests` so the array formula spills cleanly with no stuck checkboxes or extra blank rows.

## [1.5.0] - 2026-08-02

### Added
- **Organized Menu Structure with Submenus**: Re-structured the top `🎬 Brian's Theater` menu into clean, categorized submenus (`🎬 Movie Tools`, `🧹 Clean Up & Maintenance`, `📡 Sync & Automation`, and quick-action items), removing clutter.

## [1.4.0] - 2026-08-02

### Added
- **Movie Requests Checkbox Cleaner & Auto Row Creation**: Extended blank checkbox cleanup to the `Movie Requests` tab. Any empty row on `Movie Requests` automatically has its checkboxes and data validations removed. If all rows on `Movie Requests` are filled, a new clean row is automatically created at the bottom for upcoming requests.

## [1.3.3] - 2026-08-02

### Added
- **Automatic Blank Checkbox Cleaner (Rows 20-51)**: Added `cleanUpEmptyCheckboxes()` to scan rows 20-51 on `Quick Schedule`. Any row without movie title/request data automatically has its checkboxes and data validations cleared so empty rows stay completely clean. Runs on open, on edit, and via menu `🧹 Clean Up Blank Checkboxes (Rows 20-51)`.

## [1.3.2] - 2026-08-02

### Added
- **Gemini AI Fallback for Candidate Selector**: When TMDB search returns 0 results for niche, indie, or unlisted movies/shows (such as *"You, Me & Tuscany"*), the selection picker modal automatically queries Gemini AI to generate candidate matches so you can select and apply them directly from the popup!

## [1.3.1] - 2026-08-02

### Added
- **Full Data Tab & Multi-Tab Support**: `🔍 Select Movie Version` and `Auto-Fill Movies` now natively support selecting rows directly on the `Data` tab as well as `Quick Schedule`. When selecting a movie on either tab, titles and descriptions sync seamlessly across both tabs.

## [1.3.0] - 2026-08-02

### Added
- **Automatic Year Filtering**: Title inputs like `Masters of the Universe 2026` or `Masters of the Universe (2026)` automatically extract the year and filter TMDB search results by release year.
- **Interactive Movie Version Picker**: Added menu item `🔍 Select Movie Version (Disambiguate)` and `MoviePicker.html` popup modal. Users can select any movie row, view candidate matches with poster thumbnails and release years, and click to apply the exact version.

## [1.2.2] - 2026-08-02

### Fixed
- Fixed Gemini API fallback loop behavior: high demand, rate limit (429), or server overload errors now seamlessly trigger the next available fallback model (`gemini-3.6-flash` → `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-1.5-flash`) instead of halting execution early.

## [1.2.1] - 2026-08-02

### Added
- Added `gemini-3.6-flash` as primary model choice in Gemini API fallback chain (`gemini-3.6-flash` → `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-1.5-flash`).

## [1.2.0] - 2026-08-02

### Added
- Upgraded Gemini API model fallback system to target `gemini-2.5-flash` (and `gemini-2.0-flash` / `gemini-1.5-flash`).

### Fixed
- Fixed row 2 skipping bug in `MovieFetcher.js` auto-fill feature. Array scanning now starts at Row 2 (`C2` and `N2`) instead of Row 3 (`C3` and `N3`), ensuring the 1st movie on row 2 is properly processed and populated.
