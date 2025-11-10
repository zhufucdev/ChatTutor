<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { MarkdownRender } from 'vue-renderer-markdown'

defineProps<{
  content: string
  border?: boolean
  classes: string
}>()
</script>

<template>
  <div
    class="text-gray-600 px-2 markdown flex flex-row items-center"
    :class="{ 'border border-rounded-lg': border, [classes]: true }"
  >
    <div class="size-4 flex justify-center items-center animate-spin" v-if="running">
      <FontAwesomeIcon :icon="faSpinner" />
    </div>
    <ClientOnly>
      <MarkdownRender :content="content" />
    </ClientOnly>
  </div>
</template>