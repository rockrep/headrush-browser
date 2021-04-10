import styles from '../styles/footer.module.css'

const Footer =() => (
  <footer className={styles.footer}>
    <div className={styles.disclaimer}>
      <div>Eleven® is a registered trademark of Avid Technology, Inc. HeadRush® is a registered trademark of inMusic Brands, Inc.</div>
      <div>
        HeadRush Browser is an open-source project and is not affiliated with Avid Technology, Inc or inMusic Brands, Inc. in any way.
      </div>
      <div>Avid Technology, Inc. and inMusic Brands, Inc. are not responsible for the functionality of this project in any way.</div>
      <div>This is NOT a Librarian/Editor. All functionality is Read-Only</div>
      <div className={styles.source}>
        <span>Want to conribute?&nbsp;</span><a href="github.com/rockrep/headrush-browser">Source code repository</a>
      </div>
    </div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    </a>
  </footer>
)

export default Footer