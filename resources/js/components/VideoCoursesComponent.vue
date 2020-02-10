<template>
    <div class="video-player">
        <div class="video-container">
            <iframe
                :src="this.activeVideo.youtubeURL"
                width="640"
                height="1236"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
            <h3>{{ this.activeVideo.title }}</h3>
            <div class="row">
                <p>{{ this.activeVideo.views }} views</p>
            </div>
             <form-wizard title subtitle>
    <tab-content title="Unidad 1">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6 class="etiqueta">Tema 1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6 class="etiqueta">Tema 2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6 class="etiqueta">Tema 3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    <tab-content title="Unidad 2">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion1">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion1"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 2.1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 2.2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 2.3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 2.4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    <tab-content title="Unidad 3">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion2">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion2"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 3.1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6  class="etiqueta">Tema 3.2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6 class="etiqueta">Tema 3.3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6 class="etiqueta">Tema 3.4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    
  </form-wizard>
        </div>
        <div class="video-list">
            <div
                @click="chooseVideo(video)"
                :key="video.id"
                v-for="video in videos"
                class="thumbnail"
            >
                <div class="thumbnail-img">
                    <img :src="video.thumbnail" />
                </div>
                <div class="thumbnail-info">
                    <h3>{{ video.title }}</h3>
                    <p>{{ video.creator }}</p>
                    <p class="thumbnail-views">{{ video.views }} Views</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let videos = [
    {
        id: 1,
        title: "Video ejemplo",
        thumbnail: "https://img.youtube.com/vi/TTtvJssaFgA/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/TTtvJssaFgA",
        creator: "Prueba",
        likes: 0,
        views: 1
    },
    {
        id: 2,
        title: "Video ejemplo",
        thumbnail: "http://img.youtube.com/vi/MUFcK2pwnGc/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/MUFcK2pwnGc",
        creator: "Prueba",
        likes: 0,
        views: 0
    },
    {
        id: 3,
        title: "Video ejemplo - GamePlay",
        thumbnail: "https://img.youtube.com/vi/csoYfiCFju4/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/csoYfiCFju4",
        creator: "Prueba",
        likes: 0,
        views: 0
    },
    {
        id: 4,
        title: "Video ejemplo - Release Version",
        thumbnail: "http://img.youtube.com/vi/qNahJ7HPGjk/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/qNahJ7HPGjk",
        creator: "Prueba",
        likes: 0,
        views: 0
    },
    {
        id: 5,
        title: "Video ejemplo",
        thumbnail: "http://img.youtube.com/vi/Z0_JhfaLb5o/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/Z0_JhfaLb5o",
        creator: "Prueba",
        likes: 0,
        views: 0
    },
    {
        id: 6,
        title: "Video ejemplo ",
        thumbnail: "http://img.youtube.com/vi/c6vjW5ljTJE/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/c6vjW5ljTJE",
        creator: "Prueba",
        likes: 0,
        views: 0
    },
    {
        id: 7,
        title: "Video ejemplo",
        thumbnail: "https://img.youtube.com/vi/ck0gbznoJQw/0.jpg",
        youtubeURL: "https://www.youtube.com/embed/ck0gbznoJQw",
        creator: "Prueba",
        likes: 0,
        views: 0
    }
];
export default {
    name: "VideoPlayer",
    data() {
        return {
            videos,
            activeVideo: videos[0]
        };
    },
    methods: {
        chooseVideo(video) {
            // setting video as active video
            this.activeVideo = video;
            // increase the videos views by 1
            video.views += 1;
        }
    }
};
</script>

<style scoped>
.thumbnail {
    display: flex;
}
.thumbnail img {
    width: 168px;
    padding-bottom: 10px;
}
.thumbnail-info {
    margin-left: 20px;
}
.thumbnail h3 {
    font-size: 16px;
}
h3,
p {
    margin: 0;
    padding: 0;
}
.thumbnail-views {
    font-size: 14px;
}
.video-player {
    display: flex;
    max-width: 1200px;
    margin: auto;
}
.video-container {
    margin-right: 40px;
}
.row {
    display: flex;
    justify-content: space-between;
}
.etiqueta{
    color: black;
}
</style>
