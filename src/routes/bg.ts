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

    {videoId: "gHw2cQMZWFM", watching: "my Beat Saber Lightshow \"Try This\"."},
    {videoId: "S0AoMa6ZH0Q", watching: "my Beat Saber Lightshow \"Moonlight\"."}   
]

export async function get() {
    return {
        body: JSON.stringify(randomList[Math.floor(Math.random()*randomList.length)])
    };
}