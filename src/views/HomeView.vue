
<template >
    <section class="section">
        <h1 class="section_h1">Liste des plantes</h1>
        <img src="../../public/icons/plante2.png" alt="" class="imgDyn">
        <div>
            <PaginationComponent :key="this.$store.state.pages" />
        </div>
        <div class="listPlantContainer">
            <CardComponent :key="this.$store.state.pages" />
        </div>
        <div>
            <PaginationComponent :key="this.$store.state.pages" />
        </div>
        <FooterComponent />
    </section>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

export default {

    components: {
        CardComponent,
        PaginationComponent,
        FooterComponent
    },

    mounted() {
        // console.log(this.$store.state.currentPlant.target);
    }

}
</script>
<style scoped>
.section {
    /* margin-bottom: 150px; */
}

.section_h1 {
    font-size: 3rem;
    font-weight: bolder;
    color: rgb(110, 175, 125);
    margin: 1.5rem 0;
}

.listPlantContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imgDyn {
    display: none;
}


@media (min-width: 1024px) {
    .section_h1 {
        text-align: center;
        font-size: 4rem;
        font-weight: bolder;
        margin: 2rem;
    }

    .listPlantContainer {
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 5px;
    }

    .imgDyn {
        display: block;
        height: 300px;
        position: absolute;
        right: 5%;
        top: 40px;
    }

}
</style>