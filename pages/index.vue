<template>
  <Container
    id="hero"
    class="flex flex-col col-span-2 h-full w-fit space-y-4 sm:space-y-0"
  >
    <div class="h-full flex flex-col justify-center flex-grow text-2xl md:text-8xl sm:m-auto">
      <h1 style="font-family: 'Outfit', sans-serif;">LOOKING FOR NOT THE</h1>
      <h1>
        <span class="text-colorPrimaryLight" style="font-family: 'Poppins', sans-serif; font-style: italic;">"average" </span>
        <span style="font-family: 'Outfit', sans-serif;">CUSTOM</span>
      </h1>
      <h1 style="font-family: 'Outfit', sans-serif;">ROM EXPERIENCE?</h1>
      <h4 class="text-lg italic" style="font-family: 'Outfit', sans-serif;">
        We might be exactly what you want..........
      </h4>
    </div>
    <div
      class="h-fit flex flex-col-reverse sm:flex-row lg:min-h-60 justify-center items-center space-x-0 sm:space-x-8 *:rounded-3xl *:overflow-clip"
    >
      <div
        id="call-to-action"
        class="h-full min-h-40 w-full sm:w-4/12 flex outline-dashed outline-1 p-4"
      >
        <div class="flex m-auto">
          <div class="h-full">
            <h4 class="text-lg" style="font-family: 'Outfit', sans-serif;">try it out!</h4>
            <hr class="min-w-60 flex-grow my-2" />
            <div class="flex space-x-2">
              <Icon
                v-for="n in 4"
                :key="n"
                :name="['mdi:email-outline', 'tabler:message-circle-2', 'mingcute:telegram-line', 'mingcute:github-line'][n - 1]"
                size="24"
                class="text-colorTextLight dark:text-colorTextDark"
              />
            </div>
          </div>
          <Icon
            name="ic:outline-arrow-forward"
            class="size-14 p-3 rounded-full -rotate-45 bg-colorPrimaryLight"
          />
        </div>
      </div>
      <div
        class="h-full min-h-60 w-full flex-grow mb-5 sm:mb-0 bg-colorPrimaryLight"
      ></div>
    </div>
  </Container>
</template>
