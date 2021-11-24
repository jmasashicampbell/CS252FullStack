<template>
  <div>
    <div class="symbol-banner">
      <div class="main-title">
        <h3>Computer Science 252:</h3>
        <h1>Introduction to <br>Computational Theory</h1>
        <h2>Fall 2021 </h2>
      </div>
    </div>

    <div class="cap-width-padding">
      <h3>Course Outcomes</h3>
      <div class="outcomes">
        <outcome-box
          title="Understand Computing Paradigms"
          body="Understand the three computing paradigms and their language-based equivalents"
        ></outcome-box>
        <outcome-box
            title="Categorize Problems"
            body="Categorize problems into one of the existing paradigms"
        ></outcome-box>
        <outcome-box
            title="Understand Paradigms"
            body="Understand the difference between and limitations of paradigms"
        ></outcome-box>
        <outcome-box
            title="Decidable and Tractable"
            body="Understand the difference between computable (decidable) and practically computable (tractable)"
        ></outcome-box>
        <outcome-box
            title="Solutions to Problems"
            body="Design and justify solutions to problems of decidability and tractability"
        ></outcome-box>
      </div>
    </div>

    <div class="cap-width-padding">
      <h3>Instructors</h3>

      <div class="instructors">
        <instructor-box
            id="instructor-1"
            name="Dr. Cory Barker"
            email="barker@cs.byu.edu"
            phone="801-422-7132"
            office="2226 TMCB"
        >
          <img alt="Dr. Barker" id="barker-pic" src="../assets/drbarker.jpg">
        </instructor-box>

        <instructor-box
            id="instructor-2"
            name="Teaching Assistants"
            email="cs252ta@cs.byu.edu"
            phone="801-422-7617"
            office="1154 TMCB"
        >
          <div class="ta-pictures">
            <img alt="Timothy" src="../assets/timothy.jpeg">
            <img alt="Walker" src="../assets/walker.jpeg">
            <img alt="Xinru" src="../assets/xinru.jpeg">
            <img alt="Brian" src="../assets/brian.jpeg">
            <img alt="Chris" src="../assets/chris.jpeg">
          </div>
        </instructor-box>
      </div>
    </div>
  </div>
</template>

<script>
import OutcomeBox from "../components/outcome-box";
import InstructorBox from "../components/instructor-box";
export default {
  name: 'Home',
  components: {InstructorBox, OutcomeBox}
}
</script>

<style scoped>
.symbol-banner {
  height: 16rem;
  background-image: url("../assets/symbols.jpg");
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-title {
  padding: 1.8rem;
  text-align: center;
  background-color: white;
  border-radius: 0.7rem;
  box-shadow: var(--dark-shadow);
}

.outcomes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.outcomes div {
  width: 47%;
  margin: 0.3rem;
}

.instructors {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.instructor-box img {
  border-radius: 0.7rem;
}

#barker-pic {
  width: 9rem;
}

.ta-pictures {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 8.2rem;
}

.ta-pictures img {
  width: 3.9rem;
  margin: 0.1rem;
}

@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .symbol-banner {
    height: 22rem;
  }

  .outcomes {
    justify-content: space-between;
  }

  .outcomes div {
    width: 19%;
    margin: 0;
  }

  #instructor-1 {
    margin-right: 0.625rem;
  }

  #instructor-2 {
    margin-left: 0.625rem;
  }

  #barker-pic {
    width: 15rem;
  }

  .ta-pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 24rem;
  }

  .ta-pictures img {
    width: 7.5rem;
  }
}
</style>
