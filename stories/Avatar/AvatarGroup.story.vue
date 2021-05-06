<template>
    <div>
        <p>
            <FieldGroup label="Select color">
                <ColorPicker v-model="borderColor"/>
                border color: {{ borderColor }}
            </FieldGroup>
        </p>
        <p>
            <AvatarGroup :users="users" size="large" :limit="limit"
                         :border-color="borderColor">
                <div v-if="slot" slot="before" class="slot">
                    <PersonIcon size="large"/>
                </div>
            </AvatarGroup>
        </p>
        <p>
            <Button @click="add">
                Add
            </Button>
            <Button @click="remove">
                Remove
            </Button>
            <Button @click="toggleMiddle">
                Toggle middle
            </Button>
            <Button @click="toggleSlot">
                Toggle slot before
            </Button>
        </p>
    </div>
</template>

<script>
    import { createPersonsList } from '../api-mocks/people';
    import AvatarGroup from '@/components/Avatar/AvatarGroup';
    import Button from '@/components/Button/Button';
    import PersonIcon from '@/components/Icon/PersonIcon';
    import ColorPicker from '@/components/ColorPicker/ColorPicker';
    import FieldGroup from '@/components/Form/FieldGroup';

    const users = createPersonsList({}, 10);

    export default {
        name: 'AvatarGroupStory',
        components: {
            AvatarGroup, Button, PersonIcon, ColorPicker, FieldGroup
        },
        data() {
            return {
                borderColor: '#0052CC',
                count: 6,
                middle: true,
                slot: false,
                avatars: [...Array(10).keys()]
            };
        },
        computed: {
            users() {
                const visibleUsers = users.slice(0, this.count);
                if (!this.middle) {
                    visibleUsers.splice(2, 1);
                }
                return visibleUsers;
            },
            limit() {
                return this.slot ? 4 : 5;
            }
        },
        methods: {
            add() {
                this.count += 1;
            },
            remove() {
                this.count -= 1;
            },
            toggleMiddle() {
                this.middle = !this.middle;
            },
            toggleSlot() {
                this.slot = !this.slot;
            }
        }
    };
</script>

<style scoped>
    .slot {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #172B4D;
        margin-right: -8px;
        color: white;
    }
</style>
