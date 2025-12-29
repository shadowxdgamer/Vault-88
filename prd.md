Product Requirements Document (PRD): Vault 88

1. Vision

Vault 88 is a premium "Cyber-Rustic" logic puzzle game. It combines the tactile satisfaction of physical wooden puzzles with a mysterious, cinematic atmosphere. It is designed to be a "daily ritual" game, similar to Wordle, but with deeper logical complexity.

2. Core Features & Requirements

2.1 Game Modes

Easy: 3 digits, straightforward hints, no time limit.

Normal: 3 digits, complex logical overlaps (e.g., "One digit is correct but wrongly placed").

Hard: 4 digits, cryptic hints.

Endless: Solve as many as possible; each solve adds a few seconds to a master timer.

Time Attack: Solve a specific puzzle within 60 seconds.

2.2 Main Menu & Navigation

Play: Mode selection screen.

Leaderboard: Global rankings (Supabase).

Support: "Buy Me A Coffee" integration.

Source: Link to GitHub repository.

Settings: Toggle for Sound/Music and Haptics.

2.3 Audio & Sensory (SFX)

Interaction: * Wooden Click: Short, hollow "clack" when cycling digits.

Heavy Thud: When pressing "Unlock".

Feedback:

Success: High-pitched metallic chime or mechanical whirring of a vault opening.

Failure: Low-frequency buzz and haptic vibration (on mobile).

BGM: Atmospheric, cinematic ambient loop.

3. Technical Architecture

3.1 Stack

Frontend: React (Vite)

State Management: React Context or Zustand (for game settings and user progress).

Audio: Howler.js (Best for cross-browser audio compatibility).

Database/Backend: Supabase (Auth, Leaderboards, Realtime PvP).

Hosting: Netlify (Free tier).

3.2 Leaderboard Schema (Supabase)

Field

Type

Description

id

UUID

Primary Key

username

String

Display Name

score

Integer

Total points or best Time Attack

mode

String

easy, normal, hard, endless

created_at

Timestamp

Date of score

4. Roadmap

Phase 1: MVP (Current)

React implementation of core logic and responsive UI.

Local Storage for high scores.

Phase 2: Polishing

Integration of SFX and BGM.

Main Menu implementation.

Supabase integration for Global Leaderboard.

Phase 3: Engagement

Daily Challenge (same puzzle for everyone globally).

Achievements (e.g., "Cracked 10 vaults in a row").

Phase 4: PvP (The Future)

"Vault Race": Two players get the same code; first to unlock wins.

"The Architect": One player sets the code and hints, the other tries to solve it.

5. What's Missing? (Engineer's Note)

PWA Support: We should add a Web App Manifest so users can "Install" the game on their home screens without an app store.

Haptic Feedback: Using the navigator.vibrate API for mobile users to simulate the "click" of the wood.

Accessibility: Ensure the color contrast (especially the blue hints) meets WCAG standards for colorblind users.