<template>
  <div>
    <!-- this is the only solution to get vuetify css running in component -->
    <link
      href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
      rel="stylesheet"
    />
    <v-row>
      <v-col>
        <v-card></v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { VRow, VCol, VCard } from "vuetify/lib";
export default {
  name: "TemplateComponentForWebExport",
  components: {
    VCard,
    VRow,
    VCol
  },
  data: () => ({})
};
</script>
