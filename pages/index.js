import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button, LinearProgress } from '@material-ui/core'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

const debug = require('debug')('hr:pages:index')

export default function Home({ headrushRoot, setHeadrushRoot }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Headrush Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="./HeadRush_black-logo.png" width="800" />
        <h1 className={styles.title}>Headrush Browser</h1>
        <h2 className={styles.subtitle}>for Pedalboard Firmware 2.3.0</h2>

        <p className={styles.description}>
          Enter the root file path to the folder that contains your Headrush Pedalboard Rigs and Blocks folders
        </p>
        <img src="./blocks-rigs-folders.png" />
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
                setHeadrushRoot(values.headrushRoot)
                router.push('/browser', null, { query: { hr: values.headrushRoot } })
                // router.push('/browser')
                // window.location.href = '/browser'
                // document.cookie serialize correctly
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
      <Footer />
    </div>
  )
}

export async function getServerSideProps(ctx) {
  debug(ctx)
  return {
    props: {
      headrushRoot: `${process.cwd()}/static`,
    },
  }
}
