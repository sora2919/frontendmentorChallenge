<script setup></script>

<template>
  <!-- 最外層容器 -->
  <div class="min-h-screen md:bg-stone-100 md:flex justify-center items-center">
    <!-- 卡片容器 -->
    <div
      class="w-full bg-white md:max-w-3xl md:mx-auto md:my-20 md:p-10 md:rounded-3xl md:shadow-lg"
    >
      <!-- 圖片 -->
      <img
        src="./assets/images/image-omelette.jpeg"
        alt="A picture of omelette"
        class="w-full md:rounded-xl md:mb-8"
      />
      <!-- 內容區塊 -->
      <div class="p-8 md:p-0">
        <h1 class="text-4xl font-youngSerif text-stone-900 mb-4">
          Simple Omelette Recipe
        </h1>
        <p class="text-base font-outfit text-stone-600 mb-8">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <!-- 準備小卡 -->
        <div class="bg-rose-50 font-outfit p-4 rounded-xl font-normal mb-8">
          <h3 class="text-xl text-rose-800 font-bold mb-4">Preparation time</h3>
          <!-- 清單 -->
          <ul
            class="pl-6 list-disc text-base text-stone-600 marker:text-rose-800 justify-center items-center"
          >
            <li class="items-start list-item mb-4">
              <span class="font-bold ml-4">Total:</span
              ><span>Approximately 10 minutes</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="font-bold ml-4">Preparation:</span
              ><span>5 minutes</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="font-bold ml-4">Cooking:</span><span>5 minutes</span>
            </li>
          </ul>
        </div>
        <!-- 預備材料 -->
        <div class="mb-8">
          <h2 class="text-3xl font-youngSerif text-brown-800 mb-4">
            Ingredients
          </h2>
          <ul
            class="pl-6 list-disc font-outfit text-base text-stone-600 marker:text-brown-800"
          >
            <li class="items-start list-item mb-4">
              <span class="ml-4">2-3 large eggs</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="ml-4">Salt, to taste</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="ml-4">Pepper, to taste</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="ml-4">1 tablespoon of butter or oil</span>
            </li>
            <li class="items-start list-item mb-4">
              <span class="ml-4"
                >Optional fillings: cheese, diced vegetables, cooked
                meats,herbs</span
              >
            </li>
          </ul>
        </div>
        <hr class="mb-8" />
        <!-- 步驟 -->
        <div class="mb-8">
          <h2 class="text-3xl font-youngSerif text-brown-800 mb-4">
            Instructions
          </h2>
          <ul
            class="pl-6 list-decimal font-outfit text-stone-600 marker:text-brown-800 marker:font-bold"
          >
            <li class="list-item mb-4 mr-8">
              <div class="pl-4">
                <span class="font-bold">Beat the eggs:</span>
                <span class="font-base">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.</span
                >
              </div>
            </li>
            <li class="list-item mb-4">
              <div class="pl-4">
                <span class="font-bold">Heat the pan:</span>
                <span class="font-base">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.</span
                >
              </div>
            </li>
            <li class="list-item mb-4">
              <div class="pl-4">
                <span class="font-bold">Cook the omelette:</span>
                <span class="font-base">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </div>
            </li>
            <li class="list-item mb-4">
              <div class="pl-4">
                <span class="font-bold">Add fillings (optional):</span>
                <span class="font-base">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.</span
                >
              </div>
            </li>
            <li class="list-item mb-4">
              <div class="pl-4">
                <span class="font-bold">Fold and serve:</span>
                <span class="font-base">
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.</span
                >
              </div>
            </li>
            <li class="list-item mb-4">
              <div class="pl-4">
                <span class="font-bold">Enjoy:</span>
                <span class="font-base">
                  Serve hot, with additional salt and pepper if needed.</span
                >
              </div>
            </li>
          </ul>
        </div>
        <hr class="mb-8" />
        <!-- 營養成分 -->
        <div class="mb-8">
          <h2 class="text-3xl font-youngSerif text-brown-800 mb-4">
            Nutrition
          </h2>
          <p class="mb-4 text-stone-600 font-outfit font-base">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <ul class="divide-y divide-stone-200 font-outfit">
            <li class="grid grid-cols-2 py-2 pl-8">
              <span class="text-stone-600">Calories</span>
              <span class="font-bold text-brown-800">277kcal</span>
            </li>
            <li class="grid grid-cols-2 py-2 pl-8">
              <span class="text-stone-600">Carbs</span>
              <span class="font-bold text-brown-800">0g</span>
            </li>
            <li class="grid grid-cols-2 py-2 pl-8">
              <span class="text-stone-600">Protein</span>
              <span class="font-bold text-brown-800">20g</span>
            </li>
            <li class="grid grid-cols-2 py-2 pl-8">
              <span class="text-stone-600">Fat</span>
              <span class="font-bold text-brown-800">22g</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
