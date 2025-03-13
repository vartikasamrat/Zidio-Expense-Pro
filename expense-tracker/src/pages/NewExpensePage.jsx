import React, { useState } from 'react';
import styles from './NewExpensePage.module.css';

const NewExpensePage = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [attachments, setAttachments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log({
      description, amount, category, date, notes, attachments
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Expense</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category" className={styles.label}>Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
            required
          >
            <option value="">Select Category</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="office">Office Supplies</option>
            <option value="software">Software</option>
            <option value="marketing">Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notes" className={styles.label}>Additional Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="attachments" className={styles.label}>Attachments</label>
          <input
            type="file"
            id="attachments"
            onChange={(e) => setAttachments(e.target.files)}
            className={styles.input}
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.button}>Submit Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpensePage;
