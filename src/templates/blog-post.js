import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout-section"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3><span>{post.frontmatter.category}</span> / <span>{post.frontmatter.sub_category}</span></h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        sub_category
      }
    }
  }
`
