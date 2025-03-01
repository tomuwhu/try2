<script>
    const { data } = $props()
    var x = $state(0)
</script>
<h1>Cica</h1>
{data.user?.age}
<form method="POST">
    <div class="ui input">
        <input type="text" name="cica">
    </div>
    <button class="ui red button" formaction="?/cica">Elküld 1</button>
    <button class="ui blue button" formaction="?/kutya">Elküld 2</button>
</form>
<div class="ui divider"></div>
<div class="ui container">
    <div class="ui slider">
    <input type="range" min="0" max="100" bind:value={x}>
    </div>
    <div class="ui card">{x}</div>
</div>
<button class="ui red small button"
onclick={ async () => { 
    const data = await fetch('/server', { 
        method: 'POST', 
        body: JSON.stringify({x, y: 1}) }) 
    .then(res => res.json())
    console.log(data)
}}
>POST</button>
<style>
    .ui.container {
        display: flex;
        justify-content: center;
    }
</style>