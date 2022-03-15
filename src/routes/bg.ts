export interface BGData {
    videoId: string,
    watching: string
}

let randomList: Array<BGData> = [
    {videoId: "Z4I8KkSGZj0", watching: "me play Toxic Violet Cubes on Beat Saber."},
    {videoId: "MSYOks0-35Q", watching: "me play Ievan Polkka on Beat Saber."},
    {videoId: "yN3NY3Kej9M", watching: "me play Fresh! on Beat Saber."},
    {videoId: "ySckzZGbaig", watching: "me play Midnight Lady on Beat Saber."},
    {videoId: "5sTPFFAqlWk", watching: "me play Faerie on Beat Saber."},
    {videoId: "LnvVXyWa7hg", watching: "me play Revenge (Reek Remix) on Beat Saber."},
    {videoId: "30fqZK-l8K8", watching: "me play STAY on Beat Saber."},
    {videoId: "F_gK371bVxo", watching: "me play Halibo on Beat Saber."},
    {videoId: "-dnI5IueiFY", watching: "me play 404 (wip) on Beat Saber."},
    {videoId: "to5VVupFUNk", watching: "me play Real Or Lie on Beatsu!"},
    {videoId: "xjaA4yY-aAA", watching: "me play I Said Meow on Beat Saber."},

    {videoId: "gHw2cQMZWFM", watching: "my Beat Saber Lightshow \"Try This\"."},
    {videoId: "S0AoMa6ZH0Q", watching: "my Beat Saber Lightshow \"Moonlight\"."},
    {videoId: "2spfZOA9_Qw", watching: "my Beat Saber Lightshow \"Internet Friends\"."},
    {videoId: "C-Cl9rFdTUA", watching: "the drop of my WIP Beat Saber Lightshow \"Harpoon\"."},

    {videoId: "s-pHXNSALqQ", watching: "my speedrun of HMS Orca on The Escapists 2."},
    {videoId: "wabZDi-gBNw", watching: "my speedrun of The Glorious Regine on The Escapists 2."},
    {videoId: "f6A6LUoNqbY", watching: "my speedrun of Rattlesnake Springs on The Escapists 2."},
    {videoId: "xsSJivFpXvs", watching: "my speedrun of Cougar Creek Railroad on The Escapists 2."},
    {videoId: "c7Y9DWxZA7w", watching: "my speedrun of Center Perks 2.0 on The Escapists 2."}
]

export async function get() {
    return {
        body: JSON.stringify(randomList[Math.floor(Math.random()*randomList.length)])
    };
}