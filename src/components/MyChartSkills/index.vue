<template>
    <div id="my-skills">
        <h3>Skills</h3>
        <skil-lang :width="600"
                  :height="400"
                  :options="{responsive: false, maintainAspectRatio: true}">
        </skil-lang>
        <hr>
        <div style="margin: 25px">
            <h5>Commits</h5>
            <charty :width="600"
                :options="{responsive: false, maintainAspectRatio: true}"
                :height="400">
            </charty>
        </div>
    </div>
</template>

<script>
import skilLang from './radioChart';
import charty from './chartli';

export default {
    name: 'MySkills',
    components: {
        'skil-lang': skilLang,
        'charty': charty
    }
}
</script>
<style>
    #my-skills{
        text-align: center;
        padding: 50px;
    }
</style>

