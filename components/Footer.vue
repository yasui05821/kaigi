<template>
  <section>
    <section class="p-toTop">
      <div class="p-toTop-nob">
        <img class="p-toTop-nobImg" src="https://placehold.it/200x100" alt="">
      </div>
    </section>
    <footer class="p-footer">
      <div class="container">
        <div class="p-footer-items">
          <div class="p-footerLogo">
            <img class="p-footerLogo-logo" src="https://placehold.it/800x200" alt="">
            <div class="p-footerLogo-past">
              <span>
                過去の開催
              </span>
              <span class="p-footerLogo-baloon">
                <a href="">2018</a>
              </span>
            </div>
          </div>
          <div class="p-footerLinks">
            <ul class="p-footerLinks-links">
              <li class="p-footerLinks-link">
                <a href="">お問い合わせ</a>
              </li>
              <li class="p-footerLinks-link">
                <a href="">行動規範</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-footerCredit">
          <div>Powered by</div>
          <img class="p-footerCredit-logo" src="https://placehold.it/800x200" alt="">
          <img class="p-footerCredit-logo" src="https://placehold.it/800x200" alt="">
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_mixin.scss";
@import "~/assets/scss/library/_variable.scss";

$clr-footer:#2D2C2F;

.p-toTop{
  border-top: 2px #FFF solid;
  background-image: url("https://placehold.it/200x200");
  height: 15rem;
  position: relative;

  &-nob{
    position: absolute;
    width: 10rem;
    height: 6.5rem;
    margin-left: -5rem; // to put this center
    left:50%;
    bottom: -2rem;
    background: $clr-footer;
  }

  &-nobImg{
    display: block;
    width: 7.5rem;
    margin: 2rem auto;
  }

}

.p-footer{
  background: $clr-footer;
  color: #FFF;
  overflow: hidden; // disable Collapsing Margins
  &-items{
    border-bottom: #7f828b 1px solid;
    margin-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.p-footerLogo,
.p-footerLinks{
  max-width: 100%;
  width: 45rem;
}

.p-footerLogo{
  @include media_desktop {
    padding: 0 11rem;
  }

  &-logo{
    width: 25rem;
  }
  &-past{
    margin: 2rem 0;
  }
  &-baloon{
    background: $clr-main;
    padding: .5rem 1rem;
    border-radius: 0.5rem;
    a{
      color: $clr-footer;
    }
  }
}

.p-footerLinks{
  @include media_desktop {
    padding-left: 17rem;
  }
  &-links{
    list-style: none;
  }
  &-link{
    margin-bottom: 2rem;
    a{
      color: $clr-main;
    }
  }
}

.p-footerCredit{
  font-size: 1.4rem;
  text-align: center;
  &-logo{
    display: block;
    width: 15.5rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }

}
</style>
