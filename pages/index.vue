<template>
  <Container
    id="hero"
    class="flex flex-col col-span-2 h-full w-fit space-y-4 sm:space-y-0"
  >
    <div class="h-full flex-grow text-3xl md:text-8xl sm:m-auto">
      <h1>LOOOKING FOR THE NOT</h1>
      <h1>
        <span class="text-colorPrimaryLight italic">"avarage" </span>CUSTOM
      </h1>
      <h1>ROM EXPERIENCE?</h1>
      <h4 class="text-lg italic">
        We might be exaclty what you want..........
      </h4>
    </div>
    <div
      class="h-fit flex flex-col-reverse sm:flex-row lg:min-h-60 justify-center items-center space-x-0 sm:space-x-8 *:rounded-2xl *:overflow-clip"
    >
      <div
        id="call-to-action"
        class="h-full min-h-40 w-full sm:w-4/12 flex outline-dashed outline-1 p-4"
      >
        <div class="flex m-auto">
          <div class="h-full">
            <h4 class="text-lg">try it out</h4>
            <hr class="min-w-44 flex-grow my-2" />
            <div class="flex space-x-2">
              <Icon
                v-for="n in 4"
                name="mdi:github"
                size="24"
                class="text-colorTextLight dark:text-colorTextDark"
              />
            </div>
          </div>
          <Icon
            name="ic:outline-arrow-forward"
            class="size-14 p-4 rounded-full -rotate-45 bg-colorPrimaryLight"
          />
        </div>
      </div>
      <div
        class="h-full min-h-40 w-full flex-grow mb-4 sm:mb-0 bg-colorPrimaryLight"
      ></div>
    </div>
  </Container>
</template>
