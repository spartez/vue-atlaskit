<template>
    <div>
        <TabContainer v-model="active">
            <Tab v-for="i in tabs" :id="i" :key="i"
                 slot="tabs" :disabled="i === 4">
                <TabItemContent :index="i"/>
            </Tab>
            <TabContent v-for="i in tabs" :id="i" slot="content"
                        :key="i">
                <span class="content">Tab Content {{ i }}</span>
            </TabContent>
        </TabContainer>
        <TabContainer v-model="active">
            <Tab v-for="i in tabs" :id="i" :key="i"
                 slot="tabs" :disabled="i === 4">
                Verrryyy Loooooong Tab {{ i }}
            </Tab>
            <TabContent v-for="i in tabs" :id="i" slot="content"
                        :key="i">
                <span class="content">Verrryyy Loooooong Tab Content {{ i }}</span>
            </TabContent>
        </TabContainer>
    </div>
</template>


<script>
    import { Tab, TabContent, TabContainer } from '@/components/Tabs';
    import TabItemContent from './TabItemContent';

    export default {
        name: 'TabsStory',
        components: {
            TabContainer, TabContent, Tab, TabItemContent
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
    background-color: rgb(244, 245, 247);
    border-radius: 3px;
    color: rgb(107, 119, 140);
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
