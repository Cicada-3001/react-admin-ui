@import "../../styles/responsive.scss";

.topBox {
  h1 {
    margin-bottom: 20px;

    @include xxl{
      font-size: 24px;
    }
  }

  .list {
    .listItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .user {
        display: flex;
        gap: 20px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;

          @include xxl{
            display: none;
          }
          @include lg{
            display: block;
          }
        }

        .userTexts {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .username {
            font-size: 14px;
            font-weight: 500;
          }
          .email {
            font-size: 12px;

            @include xxl{
              display: none;
            }
            @include lg{
              display: block;
            }
          }
        }
      }

      .amount {
        font-weight: 500;
      }
    }
  }
}