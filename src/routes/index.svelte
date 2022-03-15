<script context="module" lang="ts">
    export const load = async ({ fetch }) => {

        let req = await fetch("/bg");
        let bgData: BGData = await req.json();

        let nReq = await fetch("/n");
        let nData = await nReq.json();

        return {
            props: {
                bgData,
                nData
            }
        };
    }
</script>

<script lang="ts">
    import type { BGData } from "./bg";
    
    export let bgData: BGData;
    export let nData;
</script>

<svelte:head>
    <title>{nData.full}</title>
</svelte:head>

<section id="webSec">
    <div id="ytbg">
        <iframe id="ytplayer" type="text/html" title="YT Video Player" width="640" height="360"
            src="https://www.youtube.com/embed/{bgData.videoId}?autoplay=1&controls=0&mute=1&loop=1&modestbranding&disablekb=1&playlist={bgData.videoId}"
            frameborder="0">
        </iframe>
    </div>

    <div class="web-content">
        <p id="title">Hello lovely!</p>
        <p id="text">I'm {nData.short}, welcome to my corner of the internet!</p>
        <p id="text">
            <a href="https://github.com/IsGabriellaCurious">github</a>
            <a href="https://scoresaber.com/u/76561198166602152">scoresaber</a>
            <a href="mailto:isgabriellacurious@gmail.com">contact</a>
        </p>
        
    </div>
    <p id="bottom">You are watching {bgData.watching}</p>
</section>
