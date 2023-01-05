<template>
  <div>
    <TabContainer v-model="active">
      <TabHeader
        v-for="i in tabs"
        :id="i"
        :key="i"
        slot="tabs"
        :disabled="i === 4"
      >
        <TabItemContent :index="i"/>
      </TabHeader>
      <TabHeader
        id="custom"
        key="custom"
        slot="tabs"
        :inactive="true"
      >
        Inactive Tab
      </TabHeader>
      <TabContent
        v-for="i in tabs"
        :id="i"
        slot="content"
        :key="i"
      >
        <span class="content">Tab Content {{ i }}</span>
      </TabContent>
    </TabContainer>
    <TabContainer v-model="active">
      <TabHeader
        v-for="i in tabs"
        :id="i"
        :key="i"
        slot="tabs"
        :disabled="i === 4"
      >
        Verrryyy Loooooong Tab {{ i }}
      </TabHeader>
      <TabContent
        v-for="i in tabs"
        :id="i"
        slot="content"
        :key="i"
      >
        <span class="content">Verrryyy Loooooong Tab Content {{ i }}</span>
      </TabContent>
    </TabContainer>
  </div>
</template>


<script>
    import { TabHeader, TabContent, TabContainer } from '@/components/Tabs';
    import TabItemContent from './TabItemContent';

    export default {
        name: 'TabsStory',
        components: {
            TabContainer, TabContent, TabHeader, TabItemContent
        },
        data() {
            return {
                active: 1,
                tabs: 8
            };
        }
    };
</script>

<style scoped>
.content {
    align-items: center;
    background-color: var(--ds-surface, #FFFFFF);
    border-radius: 3px;
    color: var(--ds-text, #172B4D);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 4em;
    font-weight: 500;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 16px;
    padding: 32px;
}
</style>
