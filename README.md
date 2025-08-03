# Emulator for Sonic ERaZor: Zenith Edition

A fork of heyjoeway's [Sonic 2 Community's Cut](https://jojudge.com/s2cx) emulator (which itself is a fork of [Genesis Plus GX](https://github.com/ekeeke/Genesis-Plus-GX)) used to build a standalone EXE of Sonic ERaZor (subtitled *Zenith Edition*).

For a full guide on how to build this project, read the instructions on the upstream repository: https://github.com/heyjoeway/Genesis-Plus-GX

## Differences to heyjoeway's project
Most of the heavy lifting was already done, but a few tweaks were still needed:

Big fixes:
- Fixed widescreen centering not working when S/H mode is enabled (I guess since Sonic 2 doesn't ever use these, it slipped through the cracks)
- Changed sprite processing logic to still work during disabled display. This was required to make the cinematic black bars in ERaZor work flawlessly (since GPGX doesn't support the hardware mode)

Streamlining:
- ROM is bundled directly into the compiled EXE, rather than being required as a side file
- Disabled IPS patching stuff
- Renamed *game.srm* to *savedata.srm*
- The SDL *gamecontrollerdb.txt* file is directly embedded into the compiled EXE now
- Address errors are now disabled by default

Other:
- Created a custom ico image
- Added *side_files* folder
- Disabled checks for *confirm_reset* and *confirm_quit*, now always true
- Renamed *config.json* to *controls.json*, and removed everything unimportant
