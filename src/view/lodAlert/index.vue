<template>
    <div>
        <cctvbox :showCCTVDetail="true" :newAlertShow2="true" :stepCount="0" />
        <div class="relative  animate-slide-up ">
            <alert :newAlertShow="true" :newAlertShow2="true" :stepCount="1" />
        </div>
    </div>
</template>
<script setup>
import cctvbox from "../security/cctvbox.vue"
import alert from "../security/alert.vue"
import alertWarning3 from "../facilitiesManagement/components/alertWarning3"
import alertFMFinish from "../facilitiesManagement/components/alertFMFinish"
</script>