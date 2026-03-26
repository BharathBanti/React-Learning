import { useState } from 'react';
import './styles/Goals.css';

function Goals() {
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);

  return (
    <div className="goals-page">
      <section className="add-goal-panel">
        <div>
          <h1 className="goal-form-title">Goals</h1>
          <p className="goal-form-subtitle">
            Add a new goal and stay consistent with your milestones.
          </p>
        </div>
        <button
          type="button"
          className="goal-form-submit-btn"
          onClick={() => setIsAddGoalOpen(true)}
        >
          Add Goal
        </button>
      </section>

      {isAddGoalOpen && (
        <div
          className="goal-modal-overlay"
          onClick={() => setIsAddGoalOpen(false)}
        >
          <div
            className="goal-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="goal-modal-close-btn"
              aria-label="Close add goal form"
              onClick={() => setIsAddGoalOpen(false)}
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
            <AddGoalForm />
          </div>
        </div>
      )}
    </div>
  );
}

function AddGoalForm() {
  return (
    <section className="goal-form-card">
      <div className="goal-form-header">
        <h1 className="goal-form-title">Define a New Milestone</h1>
        <p className="goal-form-subtitle">
          Create a clear goal and break it into a focused direction.
        </p>
      </div>

      <form className="goal-form" onSubmit={(event) => event.preventDefault()}>
        <div className="goal-form-group">
          <label htmlFor="goalTitle">Title</label>
          <input
            type="text"
            id="goalTitle"
            name="goalTitle"
            placeholder="What are you aiming to achieve?"
          />
        </div>

        <div className="goal-form-group">
          <label htmlFor="goalIntent">Intent</label>
          <textarea
            id="goalIntent"
            name="goalIntent"
            placeholder="Why does this matter?"
            rows="4"
          />
        </div>

        <div className="goal-form-grid">
          <div className="goal-form-group">
            <label htmlFor="targetDate">Completion Target</label>
            <input type="date" id="targetDate" name="targetDate" />
          </div>

          <div className="goal-form-group">
            <label htmlFor="strategicPriority">Strategic Priority</label>
            <select name="strategicPriority" id="strategicPriority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="goal-form-group">
          <label htmlFor="focusArea">Focus Area</label>
          <select name="focusArea" id="focusArea">
            <option value="Learning">Learning</option>
            <option value="Health">Health</option>
            <option value="Career">Career</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="goal-form-submit-btn">
          Commit Goal
        </button>
      </form>
    </section>
  );
}

export default Goals;
