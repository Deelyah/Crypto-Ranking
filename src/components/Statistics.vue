<template>
  <section>
    <div class="stat-segment w-full">
      <div class="mobile-view">
        <div class="stat-container">
          <div class="snapshot">
            <span class="left">Market Snapshot</span>
            <span class="right"></span>
          </div>
          <div class="pl-4 statistics">
            <div class="item">
              <span class="left">Market Cap:</span>
              <span class="right"></span>
            </div>
            <div class="item">
              <span class="left">Exchange Vol:</span>
              <span class="right"></span>
            </div>
            <div class="item">
              <span class="left">Assets:</span>
              <span class="right"></span>
            </div>
            <div class="item">
              <span class="left">Exchanges: </span>
              <span class="right"></span>
            </div>
            <div class="item">
              <span class="left">Markets:</span>
              <span class="right"></span>
            </div>
            <div class="item">
              <span class="left">BTC DOM Index:</span>
              <span class="right"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="large-screen hidden md:flex 2xl:hidden justify-center items-center px-26">
        <!-- <div class="flex"> -->
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">MARKET CAP</div>
            <div class="value text-center font-bold">$1.73T</div>
          </div>
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">EXCHANGE VOL</div>
            <div class="value text-center font-bold">$57.22B</div>
          </div>
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">ASSETS</div>
            <div class="value text-center font-bold">2,295</div>
          </div>
        <!-- </div> -->

        <!-- <div class="flex"> -->
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">EXCHANGES</div>
            <div class="value text-center font-bold">73</div>
          </div>
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">MARKETS</div>
            <div class="value text-center font-bold">18,341</div>
          </div>
          <div class="header-group flex flex-col justify-center items-center p-3">
            <div class="label font-bold">BTC DOM INDEX</div>
            <div class="value text-center font-bold">40.8%</div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>



<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);

@media (min-width: 0px) {
  body {
    font-family: "Lato", sans-serif;
  }

  .stat-segment {
    padding-bottom: 16px;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
      rgb(255, 255, 255);
  }

  .item {
    border-bottom: 0.5px solid rgba(34,36,38,.15);
  }

  .stat-container {
    font-size: 14px;
    color: #fff;
  }

  .item {
    padding: 12px 16px;
  }

}

@media (min-width: 768px) {
  .stat-segment {
    padding-bottom: 160px;
  }

  .mobile-view {
    display: none;
  }

  .large-screen {
    padding: 0 16px;
  }

  .header-group {
    flex: 1 1 63.3%;
  }

  .label,
  .value {
    color: white;
  }

  .label {
    font-size: 14px;
  }

  .value {
    font-size: 21px;
  }
}

@media (min-width: 900px) {
  .inner-segment {
    display: flex;
    flex-direction: row;
  }
}
</style>
