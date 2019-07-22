<template>
    <div>
        <UserRendererEnriched :user="user"/>
        <p>
            <button @click="load">
                load
            </button>
            <button @click="resolve">
                resolve
            </button>
            <button @click="reject">
                reject
            </button>
        </p>
    </div>
</template>

<script>
    import UserRendererEnriched from '@/components/field-renderers/UserRendererEnriched';
    import { createPersonsList } from '../../api-mocks/people';


    const list = createPersonsList({}, 50);

    export default {
        components: { UserRendererEnriched },
        data() {
            const [person] = list;
            return {
                person,
                user: {
                    value: person.key,
                    enriched: new Promise(() => ({}))
                }
            };
        },
        methods: {
            resolve() {
                this.user.enriched = Promise.resolve(this.person);
            },
            reject() {
                this.user.enriched = new Promise((resolve, reject) => {
                    setTimeout(() => reject(new Error('something failed')), 100);
                });
            },
            load() {
                this.user.enriched = new Promise(() => ({}));
            }
        }
    };
</script>
