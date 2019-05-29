<template>
  <div>
      <div class="icon-only-child">
          <Button><TableIcon slot="icon-before"/></Button>
          <Button :is-disabled="true" spacing="none"><EditorSettingsIcon slot="icon-before"/></Button>
          <Button spacing="none"><EditorRemoveIcon slot="icon-before"/></Button>
          <Button :is-selected="true" spacing="none"><EditorEditIcon slot="icon-before"/></Button>
      </div>
      <br>
      <Button>Pick Date<CalendarIcon slot="icon-after"/></Button>
      <Button>Pick Date<PageIcon slot="icon-before"/></Button>
  </div>
</template>

<script>
        import { Button } from '../../'
        import { TableIcon, CalendarIcon, EditorRemoveIcon, EditorSettingsIcon, PageIcon, EditorEditIcon } from "../../src/components/Icon";

        export default {
            name: "ButtonWithIcons",
            components: { TableIcon, CalendarIcon, Button, EditorSettingsIcon, EditorRemoveIcon, PageIcon, EditorEditIcon }
        }
</script>

<style scoped>
.icon-only-child {
    margin-bottom: 10px;
}
</style>
