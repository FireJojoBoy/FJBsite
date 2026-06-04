// music-section.js

// music-section.js

const releases = [
    {
        cover: 'img/Music/NG.gif',
        name: 'My Newgrounds Stuff',
        description: 'Stuff I did not properly release outside of NG, there is a Playlist of those songs on my Newgrounds Account',
        categories: ['various'],
        releaseDate: '2018-now',
        streamingLinks:{
            newgrounds: 'https://firejojoboy.newgrounds.com/audio'
        }
    },
    {
        cover: 'img/Music/Respawnio.png',
        name: 'Respawnio Theme',
        description: 'Allthough this again just being music made for a game project of mine, this song was kickstarting my music journey (also kakty liked it and made a geometry dash level with it)',
        categories: ['singles', 'important'],
        releaseDate: '28.02.2021',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/6JqAL9t0puxAXHBub4DvXS?si=qWLKpW3qQKGYCEu5O_QCIQ',
            appleMusic: 'https://music.apple.com/us/album/respawnio-theme-ep/1645534921',
            youtube: 'https://youtu.be/RfXLc-GA47Q?si=13Am54FMdtQ_q8RU',
            bandcamp: 'https://firejojoboy.bandcamp.com/track/respawnio-theme',
            soundcloud: 'https://soundcloud.com/user-869967531/respawnio-theme',
            newgrounds: 'https://www.newgrounds.com/audio/listen/1008749'
        }
    },
    {
        cover: 'img/Music/The Early Stuff.jpg',
        name: 'The Early Stuff',
        description: 'This is a collection of some songs I was recording from 2018 to 2021, most of them being unreleased up to that point',
        categories: ['various'],
        releaseDate: '2018-2021',
        streamingLinks:{
            bandcamp: 'https://firejojoboy.bandcamp.com/album/the-early-stuff-2018-2021'
        }
    },
    {
        cover: 'img/Music/LaterElevator.jpg',
        name: 'Later Elevator',
        description: 'The 0th Album in my Discography. Basically me trying to be Neil Cicierega while learning producing. You gotta start somewhere!',
        categories: ['albums'],
        releaseDate: '28.04.2022',
        streamingLinks:{
            bandcamp: 'https://firejojoboy.bandcamp.com/album/later-elevator',
            youtube: 'https://youtu.be/VosDBoWfLgg?si=GRdCLaLisF3eI62a'
        }
    },
    {
        cover: 'img/Music/Driven.jpg',
        name: 'Driven',
        description: 'I am embarrassed that this was my "distortion makes it sound like justice"-Phase, it really doesnt. That being said, I still love the strangely nostalgic vibe of this song to this day! It also samples Respawnio ^^ ',
        categories: ['singles'],
        releaseDate: '27.05.2022',
        streamingLinks:{
            newgrounds: 'https://www.newgrounds.com/audio/listen/1134174',
            bandcamp: 'https://firejojoboy.bandcamp.com/track/driven',
            spotify: 'https://open.spotify.com/track/7FuQ8dCZl1U3Y1hTgKviGd?si=deca4f3a92164424',
            appleMusic: 'https://music.apple.com/us/album/driven/1667218666?i=1667218668',
            youtube: 'https://youtu.be/TP1mdbBxqCI?si=KRwcm-xImksci1DL'
        }
    },
    {
        cover: 'img/Music/SpaceCore.jpg',
        name: 'Space Core',
        description: 'Pts. 1 - 3 were originally one track from a Later Elevator Sequel. I still wanted to release that back when I made the EP but now it stands on its own. Also back then, AI completion was cool and experimental >:(',
        categories: ['eps'],
        releaseDate: '26.07.2022',
        streamingLinks:{
            bandcamp: 'https://firejojoboy.bandcamp.com/album/space-core-ep',
            youtube: 'https://youtu.be/ZKaZl63NEng?si=fEgZ4Br1o5q14xYw'
        }
    },
    {
        cover: 'img/Music/AstroBelt.jpg',
        name: 'Astro Belt',
        description: 'My REAL debut Album and the first installment of what I now call the "Birth Trilogy". Short because it was originally supposed to be released as an EP but now it is part of an Album trilogy.',
        categories: ['albums', 'important'],
        releaseDate: '12.11.2022',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/17skmMo9OQ71dQDcRhKowK?si=h9G5yXN1SPW5kWBFHECNow',
            appleMusic: 'https://music.apple.com/album/astro-belt/1652033321',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_m34cBk2d6s9dGyehSdZquNyH5xUCtE2R0&si=CaH8Pf2JsH-b3DJR',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/astro-belt',
            soundcloud: 'https://soundcloud.com/user-869967531/sets/astro-belt'
        }
    },
    {
        cover: 'img/Music/Sascha.jpg',
        name: 'Sascha',
        description: '...we do NOT talk about Sascha',
        categories: ['singles'],
        releaseDate: '14.12.2022'
    },
    {
        cover: 'img/Music/Safe.jpg',
        name: 'Safe',
        description: 'This Single version of Safe includes Driven and more importantly: Never Safe! The iconic icewings Remix that we later extended for our Album Step by Step',
        categories: ['singles'],
        releaseDate: '01.02.2023',
        streamingLinks: {
            newgrounds: 'https://www.newgrounds.com/audio/listen/1156437',
            spotify: 'https://open.spotify.com/album/204m4h1yx5bR7RTMdF3NvP?si=wco4yxN1Q-qDE9I5H8GwOA',
            appleMusic: 'https://music.apple.com/album/safe-single/1667218666',
            youtube: 'https://www.youtube.com/watch?v=n281mPKsPVk&list=OLAK5uy_nbvAPVIyWoppGFen2G70CJ8kJpl2C2EeA',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/safe-150680321'
        }
    },
    {
        cover: 'img/Music/Runagun.jpg',
        name: 'Lost Runagun OST',
        description: 'This was the Moment I realized Runagun would probably never release, so I uploaded my 2022 Soundtrack of the game.',
        categories: ['eps'],
        releaseDate: '11.02.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/3GLU3HJ4ei5YVAnbYusLU1?si=t7qJQ3WLRPeYOG79HrHN7A',
            appleMusic: 'https://music.apple.com/album/lost-runagun-ost-early-2022-ep/1668026927',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_kYQm1DYS_PFX4jlGjMah74kzna5n9shUI&si=-jqyhRufeds-wp8k',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/lost-runagun-ost-early-2022',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/lost-runagun-ost-early-2022'
        }
    },
    {
        cover: 'img/Music/OLED.jpg',
        name: 'OLED',
        description: 'Second Album of the Birth Trilogy. This is probably my strongest 2022 work (it was still entirely recorded during 2022).',
        categories: ['albums', 'important'],
        releaseDate: '22.02.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/2ulbG0F6s3ghW6x7oHJxfH?si=laVv0ARrSAKStwqdBGPBJg',
            appleMusic: 'https://music.apple.com/album/oled/1664698164',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_mFQvaWzMvL6W0rvkwso8KJ9ynsw50mdiU&si=Gn3MROoMFfkcvU1B',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/oled',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/oled-2'
        }
    },
    {
        cover: 'img/Music/Terminate.jpg',
        name: 'Terminate',
        description: 'The Abort Single, transitioning from OLED',
        categories: ['singles'],
        releaseDate: '12.06.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/7cYgb9Bhe2BhNUX9PMuMML?si=r7N5ub7QRmWfORzfpU7tPA',
            appleMusic: 'https://music.apple.com/album/terminate-single/1690904222',
            youtube: 'https://www.youtube.com/watch?v=MNzCBGDHlgk&list=OLAK5uy_ngkDjcjSWvpuqASYBrQ37Kh32oiiOhPc8',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/terminate-5'
        }
    },
    {
        cover: 'img/Music/Abort.jpg',
        name: 'Abort',
        description: 'The Finale of the Birth Trilogy. This one is kinda weird, I tried speading a message about something that does not really affect me. It still has its moments though.',
        categories: ['albums', 'important'],
        releaseDate: '17.06.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/1r9o2T78nccGDS9wskxkjs?si=3wQrJdX-RhuAvVkV_krlvQ',
            appleMusic: 'https://music.apple.com/album/abort/1691610032',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_nUgeJaQYElTPUn7_ZSETD-tHykmjxlITc&si=vUnj9UR_Erwy2MBe',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/abort',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/abort-3'
        }
    },
    {
        cover: 'img/Music/Quirks.jpg',
        name: 'Quirks Rule',
        description: 'Quirks Rule is a more industrial/experimental/trappy take on my music. A quirky release, if you will. Still worth checking out!',
        categories: ['eps', 'important'],
        releaseDate: '21.07.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/6iTEyxTQ7OQpn3g1DPfWb4?si=dGTKs2MPTFW8hnMbxRRzdQ',
            appleMusic: 'https://music.apple.com/album/quirks-rule-ep/1695320631',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_lgkLmZ1R7qqg-s8iNzsz-XCxxy_5Qyi4Y&si=0YjyxZmzkYEUXHll',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/quirks-rule',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/quirks-rule'
        }
    },
    {
        cover: 'img/Music/Laminar.jpg',
        name: 'Laminar Flow',
        description: 'A 12 minute journey through some downtempo/chill ambient music. I always liked progressive/long tracks. One-track-EPs are great, this is my first attempt at that. Would recommend giving it a listen!',
        categories: ['eps', 'important'],
        releaseDate: '07.09.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/0SsoVog2rt8QxYUXcnhBb0?si=qtKGhw2bSKyo26k5MeGRsw',
            appleMusic: 'https://music.apple.com/album/laminar-flow-ep/1704835421',
            youtube: 'https://youtu.be/qCasWgCG4bc?si=E8gdby914BrkR3Kn',
            bandcamp: 'https://firejojoboy.bandcamp.com/track/laminar-flow',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/laminar-flow-5'
        }
    },
    {
        cover: 'img/Music/GMTK23.jpg',
        name: 'YOU make a Game!',
        description: 'Soundtrack for my GMTK jam game 2023! The Bandcamp download includes shitty midi versions lol',
        categories: ['singles'],
        releaseDate: '15.10.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/1fc50dEtuuATQ4BmgeTXmP?si=w_c5rDqGQom7XroMdRkvug',
            appleMusic: 'https://music.apple.com/album/you-make-a-game-single/1710608465',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_m8-DR1i4f3o82znlqH-TtEr-j0j2lRjDY&si=O4xopuhhA-O_Z8Qh',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/you-make-a-game',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/you-make-a-game'
        }
    },
    {
        cover: 'img/Music/r12.jpg',
        name: 'r12/maybe.flp',
        description: 'Two lowkey IDM-y songs that are pretty chill and laid back. I liked the Cover and wanted to make music sounding the way the Cover looks of that makes sense.',
        categories: ['singles'],
        releaseDate: '14.12.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/33kaqTXE0AcDxkio75V66J?si=tANVQUiLTZ-zHGTmlaSu0g',
            appleMusic: 'https://music.apple.com/album/r12-maybe-flp-single/1719811257',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_ntcrwx6zwqlE87JZk8-GGcX8J6N9QFnYI&si=qFdhe9eJ96Tr3iOq',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/r12-maybe-flp'
        }
    },
    {
        cover: 'img/Music/RmxStuff.jpg',
        name: 'I Remixed Some Stuff',
        description: '5 Remixes/Edits of some songs I like! This was definitely a fun release, especially since I rarely collaborate with others!',
        categories: ['eps', 'important'],
        releaseDate: '15.12.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/1ldBIfm0r0UOf1RahFfVMh?si=iRLT8B6MRz6ObH_g5IpMRg',
            appleMusic: 'https://music.apple.com/album/i-remixed-some-stuff-ep/1719943613',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_ky8EKwTavqiPRi7m4qX4r-UaFsB782Sq8&si=3ENtUVcLiOSm8Jff',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/i-remixed-some-stuff'
        }
    },
    {
        cover: 'img/Music/Step1.jpg',
        name: 'Just For now',
        description: 'First Step by Step Single, probably THE song off the Album. Also the first one we officially recorded.',
        categories: ['singles'],
        releaseDate: '31.12.2023',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/3egjNHEkVa8h5dFyCLkbZL?si=m_zB6xvARBuDsAEjQGw-HQ',
            appleMusic: 'https://music.apple.com/album/just-for-now-single/1721157615',
            youtube: 'https://youtu.be/3G0EpXXDSLA?si=fNgS4MKb-SRsVSDm',
        }
    },
    {
        cover: 'img/Music/Step2.jpg',
        name: 'Deep Fantasy NEO',
        description: 'Second Step by Step Single, we were kissing in the cover god damn!',
        categories: ['singles'],
        releaseDate: '02.01.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/2faDXEkKbN079nvTclaCS6?si=S93uiOa4TLquWv7ndkMAGw',
            appleMusic: 'https://music.apple.com/album/deep-fantasy-neo-single/1721157109',
            youtube: 'https://youtu.be/eumlpWWWIeI?si=3svKAH9rZ53NiVQy',
        }
    },
    {
        cover: 'img/Music/Step3.jpg',
        name: 'SENSE ME',
        description: 'Third Step by Step Single, this TV WAS harmed during the making of this Cover.',
        categories: ['singles'],
        releaseDate: '05.01.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/46zJ16uezt0GySCl7duwad?si=MGt5ByiFRk6jWkp9FPSYhQ',
            appleMusic: 'https://music.apple.com/album/sense-me-single/1721153024',
            youtube: 'https://youtu.be/Hu584W8xM6k?si=p2YTVP2Mywblcd9E',
        }
    },
    {
        cover: 'img/Music/iMissKakty.jpg',
        name: 'Step By Step',
        description: 'Vapor Album I made with Kakty (known as "Icewings" in music). I have so many great memories from this release and the music is really good in general.',
        categories: ['albums', 'important'],
        releaseDate: '07.01.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/5jGir5wlBG5gARF6B7pn45?si=XRVIalLWQ7ekYSUZlBmqSQ',
            appleMusic: 'https://music.apple.com/album/step-by-step/1722912992',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_kGVTwl7huoQ2nEXSyIhHaHAsZtkj-W9Uk&si=UdjEzGRNiNB7uulS',
            bandcamp: 'https://kaktyandfirejojoboy.bandcamp.com/album/step-by-step',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/step-by-step-727169782'
        }
    },
    {
        cover: 'img/Music/Defo.jpg',
        name: 'Definitely',
        description: 'First Fist Pumping Single, I wanted it to sound a bit like hyperpop... yeah I know it does not sound like hyperpop.',
        categories: ['singles'],
        releaseDate: '23.02.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/7raofMdEpu7YGuBHRH7VDi?si=usSOExW1SM-vYBT9_rJZSw',
            appleMusic: 'https://music.apple.com/album/definitely-single/1729595314',
            youtube: 'https://youtu.be/GPnYIrPKws0?si=enDJafEGKWbxKEOi',
        }
    },
    {
        cover: 'img/Music/Embers.jpg',
        name: 'Embers',
        description: 'Second Fist Pumping Single, probably the main single off of the Album.',
        categories: ['singles'],
        releaseDate: '01.03.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/2k8xCNcCN7ld6iZkOvvpik?si=XCAjFWB2Rk6DDO0jbtZaVg',
            appleMusic: 'https://music.apple.com/album/embers-single/1729995601',
            youtube: 'https://www.youtube.com/watch?v=8gA8bcME090&list=OLAK5uy_krfI0Ia8efUoK8_Zx1w5nIS8_KPHADGC0',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/embers-272348270'
        }
    },
    {
        cover: 'img/Music/EmbersRmx.jpg',
        name: 'Embers (Remixes)',
        description: 'I asked some friends to remix my Fist Pumping Singles as B-Sides. Since they all chose Embers, I decided to make this Remix-EP!',
        categories: ['eps'],
        releaseDate: '08.03.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/3yP3zCc7knOm65sbPDDsJD?si=5Kw7KKlmR3ujPqXbo30kKA',
            appleMusic: 'https://music.apple.com/album/embers-remixes-ep/1733030768',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_mQpWwdyDWmvtnsy7aJXaQb2gZpXjJWeAM&si=bi7_TiviZ2VQFsYt',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/embers-remixes'
        }
    },
    {
        cover: 'img/Music/2020.jpg',
        name: 'Summoning 2020',
        description: 'Third Fist Pumping Single, this one is actually re-using a demo I made back in 2020 when I had no idea what I was doing!',
        categories: ['singles'],
        releaseDate: '15.03.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/70I3lRjm3wfk2EXb0t2Gzr?si=vkL1OwIvQuW16WQmdfc3vQ',
            appleMusic: 'https://music.apple.com/album/summoning-2020-single/1733420525',
            youtube: 'https://www.youtube.com/watch?v=_9YlBQocOyE&list=OLAK5uy_mDcBkioUmQWFxhBYfnaTaAEg-HNghbfY0',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/summoning-2020'
        }
    },
    {
        cover: 'img/Music/FistPumping.jpg',
        name: 'A Fine Selection of Some Fist Pumping EDM',
        description: 'Named after a review a friend wrote for Abort, this Album is more casual and tries to focus on bangers.',
        categories: ['albums', 'important'],
        releaseDate: '22.03.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/4BEgByHUlTKkErnY0hzmEb?si=v5gG2-UNSAuEuj_ncxz3Jg',
            appleMusic: 'https://music.apple.com/album/a-fine-selection-of-some-fist-pumping-edm/1734373451',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_kkzP1fYyWvk3tGpTRyh7509yjeGTD4kyM&si=jXWEN9GMuohyAOgn',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/a-fine-selection-of-some-fist-pumping-edm',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/a-fine-selection-of-some-fist'
        }
    },
    {
        cover: 'img/Music/Jump.jpg',
        name: 'Jump, Jump!',
        description: 'Collab song with SuperSoniker to celebrate the release of Jumpoline to the Google Playstore! This was a fun project!',
        categories: ['singles'],
        releaseDate: '24.05.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/6vCi7uOUZOwGoo2lJ3nmZc?si=TorqK8uFT2uJac1i10Ps7w',
            appleMusic: 'https://music.apple.com/album/jump-jump-from-jumpoline-single/1748150916',
            youtube: 'https://youtu.be/6MjPQU6NswY?si=vwnbeHErfrUGgD9b',
            soundcloud: 'https://soundcloud.com/supersoniker-music/supersoniker-firejojoboy-jump-jump-jumpoline-ost'
        }
    },
    {
        cover: 'img/Music/Snacks.jpg',
        name: 'Summer Snacks',
        description: 'Full-on Summer vibes! Fast Paced Future Funk/French House! One of my most fun releases! Cover Art made by Comerade Cat ^^',
        categories: ['eps', 'important'],
        releaseDate: '11.06.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/2nEQneW2gPingWTWrAaUCE?si=b788gg1fSi-Xl4aMPJ6JYQ',
            appleMusic: 'https://music.apple.com/album/summer-snacks-ep/1751527087',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_lr7N5Y08fxx3yaryrATG7dK5V5u42C2DY&si=bpKjkUBaIK8BdmWP',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/summer-snacks',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/summer-snacks-1'
        }
    },
    {
        cover: 'img/Music/Thirst.jpg',
        name: 'Thirst',
        description: 'Cliffhanger Single that released alongside a muisc video! On Youtube there is a hidden bonus track "Bad Dramer (flip)". Also this song samples the soundtrack of a yiff game lmao!',
        categories: ['singles'],
        releaseDate: '28.07.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/0jvCchG2gnjZGhePSdXWTu?si=CLbfE93JQVmklHN7mVdVBQ',
            appleMusic: 'https://music.apple.com/album/thirst-single/1758949374',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_naQRg1DS6tE-ZG3kj8Pu4IYf-EfJgek24&si=cdqd6TJgQnnhibHC',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/thirst-551765572'
        }
    },
    {
        cover: 'img/Music/hau5.jpg',
        name: 'Dead Hau5',
        description: 'So I got into Deadmau5 and wanted to try making something similar to his iconic hau5 music myself. Not sure if this is more of a parody EP lol.',
        categories: ['eps'],
        releaseDate: '14.08.2024',
        streamingLinks: {
            bandcamp: 'https://firejojoboy.bandcamp.com/album/dead-hau5',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/dead-hau5'
        }
    },
    {
        cover: 'img/Music/Cliffhanger.jpg',
        name: 'Cliffhanger',
        description: 'I have a lot of things to say about this Album, will probably expand on it on my Artblog. To keep it short: This is mostly post-breakup-me trying to cope with my first breakup along with other broken relationships and mental stuff.',
        categories: ['albums', 'important'],
        releaseDate: '31.08.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/4Jc0CwVAWdTZTbWpjhJMRf?si=DSQb8W77RaOImK3a0bB3yg',
            appleMusic: 'https://music.apple.com/album/cliffhanger/1761343124',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_nts45BZRRbxuQhuH4NNYU68Dwnhaj2dt8&si=_4w7fWEzlVlo7Q2a',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/cliffhanger',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/cliffhanger-5'
        }
    },
    {
        cover: 'img/Music/rn.jpg',
        name: 'Right Now...',
        description: 'Made in 2 hours in a music jam! Theme was "use your voice/vocals in some way". After cliffhanger, I felt confident to sing! Bauhausdog hit me up to remix it, so I decided to release it as a single with the remix as a B-Side ^^',
        categories: ['singles'],
        releaseDate: '20.09.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/6TO8B2Xy7fabF291x5kdpp?si=8OsjiqW5Svynm1RoPrU7YA',
            appleMusic: 'https://music.apple.com/album/right-now-single/1772026314',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_mnoc2IwHxs4zg3659PSvp87V4wdBscz1U&si=Fr_OpQUlawFP2NI-',
            bandcamp: 'https://firejojoboy.bandcamp.com/album/right-now',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/right-now-860378632'
        }
    },
    {
        cover: 'img/Music/Digitalized.jpg',
        name: 'Digitalized',
        description: 'kÎtsune asked in the Creux la Nuit discord if someone wanted to collab with them on a demo he sent while also making a completely different outro. I love the track "The Urge" by Gesaffelstein so I was instantly in haha!',
        categories: ['singles'],
        releaseDate: '24.12.2024',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/5HJnDWaPyAlA3MT5hKpsvK?si=yad7BD9HRsqh8XvKYQ_Mdw',
            appleMusic: 'https://music.apple.com/us/album/digitalized-single/1787147176',
            youtube: 'https://youtu.be/2g3IZsROId0?si=80nyMJTv1qoNbU5n',
            soundcloud: 'https://soundcloud.com/kitsune63990/digitalized?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
        }
    },
    {
        cover: 'img/Music/Jork.jpg',
        name: 'Jork',
        description: 'I am very proud of Jork, influenced by French Electro of course but after I sent it to Rain The Prince, he sent me an mp3 and was like "Fuck you, THIS is real french electro" and this is how the B-Side was born! Also dropped this on January7th again, this might become a tradition now lolsu',
        categories: ['singles'],
        releaseDate: '07.01.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/3T6OofgvFdD1f0Gi4rxFkb?si=IjSNmfiORwqv8WV9MA_dxw',
            appleMusic: 'https://music.apple.com/us/album/jork-single/1787407662',
            youtube: 'https://youtu.be/RFSLHKwo1Ic?si=X71ReW53ovu0-J8r',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/jork-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
        }
    },
    {
        cover: 'img/Music/RAFTWARS2.jpg',
        name: 'RAFT WARS 2',
        description: 'I just felt like making this, it was so fun doing it!',
        categories: ['singles'],
        releaseDate: '27.01.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/4dWNAgpQLiRcxfeJptdTyX?si=FhHGHi5VR16mgHFocCRdmg',
            youtube: 'https://youtu.be/gUEiQtDnkJU?si=CdfcIYgg5wAWzYRL',
            soundcloud: 'https://soundcloud.com/firejojoboy/raft-wars-2?in=firejojoboy/sets/raft-wars-2',
            newgrounds: 'https://www.newgrounds.com/audio/listen/1396185'
        }
    },
    {
        cover: 'img/Music/thisthingon.jpg',
        name: 'Is This Thing On?',
        description: 'My valentines day 2025 Album. Originally this was just supposed to be a small EP but things got out of hand. Not really a main-project, a bit on the experimental side.',
        categories: ['albums'],
        releaseDate: '14.02.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/7H2nTudAp5kEtsaxdKE2zG?si=ziTANt_-Tdyt2w92iuA6ZA',
            appleMusic: 'https://music.apple.com/de/album/is-this-thing-on/1793294609',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_mgw40d3vJC7-FMtGqEBokwBJZSFlr--zo&si=DqL-SGNahAFMaIXl',
			bandcamp: 'https://firejojoboy.bandcamp.com/album/is-this-thing-on',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/is-this-thing-on-5',
        }
    },
    {
        cover: 'img/Music/Snacks2.jpg',
        name: 'Summer Snacks II',
        description: 'Summer Snacks was a fun project, so for summer 2025, I wanted to make another one! Now we have twice as many Summer Snacks jams to dance out to!',
        categories: ['eps', 'important'],
        releaseDate: '16.05.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/6vBMO6jLiYFPGqi6e5qPeT?si=n0qSbuXoRIWbH27iHFgsmw',
            appleMusic: 'https://music.apple.com/de/album/summer-snacks-ii-ep/1811299159',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_nv4MPY20NlEslVsSTXCIAbbA4MpuHHh6M&si=Hp4_jqcZSp8EHpq6',
			bandcamp: 'https://firejojoboy.bandcamp.com/album/summer-snacks-ii',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/summer-snacks-ii',
        }
    },
	{
        cover: 'img/Music/Twinty.jpg',
        name: 'Twinty',
        description: 'I turned 20 when this released! This is a song about coming to terms with that! Made this during my night in the woods phase!',
        categories: ['singles'],
        releaseDate: '18.06.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/0TyuYFIx70YbN3w91ZHn2C?si=cilov0izSuqoghJuHconDg',
            youtube: 'https://youtu.be/Nden2RTomNc?si=jpYhkOEdCzjeiOLj',
            soundcloud: 'https://soundcloud.com/firejojoboy/twinty',
            newgrounds: 'https://www.newgrounds.com/audio/listen/1441635'
        }
    },
	{
        cover: 'img/Music/Hollowverse.jpg',
        name: 'Hollowverse',
        description: 'Finally made a collab with Hollowire! This single ended up as the title track in his 2025 Album!',
        categories: ['singles'],
        releaseDate: '20.09.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/5lbCSkAXXT5kLkhvvLOvyg?si=CDFI41NVQqCiINHy43MfYw',
            youtube: 'https://youtu.be/nMaUCJc0aD4?si=8JTIT31w7RTEu3dG',
            soundcloud: 'https://soundcloud.com/hollowire/hollowverse-feat-firejojoboy'
        }
    },
	{
        cover: 'img/Music/Live2025.jpg',
        name: 'FireJojoBoys EDM - Live in Wörth 2025',
        description: 'I had my first FJB live show in September of 2025 and made a Live Album from it! Very inspired by Daft Punks and Justices live albums! Every song here is touched up and remixed!',
        categories: ['albums', 'important'],
        releaseDate: '17.10.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/39kKmJS8f4rybxndo8iQ9O?si=Z2f3Sf8NRqSK2jigE4TM6A',
            appleMusic: 'https://music.apple.com/de/album/firejojoboys-edm-live-in-w%C3%B6rth-am-main-2025/1844548012',
            youtube: 'https://youtu.be/44IZvgw3dVA?si=e_R6E692ME-M_QZ7',
			bandcamp: 'https://firejojoboy.bandcamp.com/album/firejojoboys-edm-live-in-w-rth-am-main-2025',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/firejojoboys-edm-live-in'
        }
    },
    {
        cover: 'img/Music/Era.jpg',
        name: '& Of an Era',
        description: 'Well as the cover label says, the demos for these tracks were made between 2023 and 2024 and I polished them in 2025 to turn them into this rad EP!',
        categories: ['eps', 'important'],
        releaseDate: '31.12.2025',
        streamingLinks: {
            spotify: 'https://open.spotify.com/album/2g909GlF9A0H76hBrGdYJh?si=OBX3EvFUQnWL9fUYpFFjdg',
            appleMusic: 'https://music.apple.com/de/album/of-an-era-ep/1863659976',
            youtube: 'https://youtube.com/playlist?list=OLAK5uy_kGx9tDT6a6OAIXTz_Al3zOId0W4fsWa_0&si=rKCDVn0Ey0kiikHv',
			bandcamp: 'https://firejojoboy.bandcamp.com/album/of-an-era',
            soundcloud: 'https://soundcloud.com/firejojoboy/sets/of-an-era-1',
        }
    }
];
function createReleaseItem(release) {
    const hasLinks = release.streamingLinks && Object.values(release.streamingLinks).some(link => link);

    return `
        <div class="release-item ${release.categories.join(' ')}">
            <img src="${release.cover}" alt="${release.name}" class="cover" onerror="this.src='img/Music/PlaceholderCover.png';">
            <div class="release-info">
                <h3 class="release-name">${release.name}</h3>
                <p class="release-description">${release.description}</p>
                <p class="release-date">${release.releaseDate}</p>
                <button class="listen-button" 
                        ${hasLinks ? `onclick="showPopup('${release.name}')"` : `disabled`} 
                        style="background-image: url(img/Music/links/${hasLinks ? 'listenbtnB.png' : 'listenbtnG.png'});">
                    Listen
                </button>
            </div>
        </div>
    `;
}


function showPopup(releaseName) {
    const release = releases.find(r => r.name === releaseName);
    if (!release || !release.streamingLinks) return;

    document.getElementById('popupTitle').textContent = release.name; // Set the title
    document.getElementById('popupCover').src = release.cover; // Set the cover image
    
    const serviceImages = {
        spotify: 'img/Music/links/spotify.png',
        appleMusic: 'img/Music/links/apple_music.png',
        youtube: 'img/Music/links/yt.png',
        bandcamp: 'img/Music/links/bndcmp.png',
        soundcloud: 'img/Music/links/soundcloud.png',
        newgrounds: 'img/Music/links/NG.png'
    };

    const popupContent = Object.entries(release.streamingLinks)
        .filter(([_, link]) => link) // Ensure the link exists
        .map(([platform, link]) => `
            <a href="${link}" target="_blank" class="streaming-button">
                <img src="${serviceImages[platform]}" alt="${platform}" class="streaming-icon">
            </a>
        `).join(''); // No breaks between buttons

    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').classList.add('active');
    document.body.classList.add('no-scroll');
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup').classList.remove('active'); // Remove active class
    document.body.classList.remove('no-scroll');
}



function renderReleases() {
    const container = document.getElementById('releasesContainer');
    container.innerHTML = releases.map(createReleaseItem).join('');
}

function filterReleases(category) {
    const items = document.querySelectorAll('.release-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderReleases();

    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterReleases(category);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    renderReleases();

    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Get the category from the button's data-category attribute
            const category = button.getAttribute('data-category');
            filterReleases(category);
        });
    });
});
