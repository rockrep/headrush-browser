import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button, LinearProgress } from '@material-ui/core'
import styles from '../styles/Home.module.css'

export default function Home({ headrushRoot }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Headrush Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Headrush Browser</h1>
        <h2 className={styles.subtitle}>for Firmware 2.3.0</h2>

        <p className={styles.description}>
          Enter the root file path to the folder that contains your Headrush Pedalboard Rigs and Blocks folders
        </p>
        <div>
          <Formik
            initialValues={{ headrushRoot }}
            validate={values => {
              const errors = {}
              if (!values.headrushRoot) {
                errors.headrushRoot = 'Required'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false)
                const href = '/browser'
                router.push(href, null, { query: { hr: values.headrushRoot } })
              }, 500)
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Field className={styles.headrushRoot} component={TextField} name="headrushRoot" label="Headrush Root directory" />
                <br />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                  Load
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      headrushRoot: `${process.cwd()}/static`,
    },
  }
}
