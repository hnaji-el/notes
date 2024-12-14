* Instead of using `width` and `hight`, use `padding` and make the content takes its dimension.
* Text content inside the markup:
  * Write normal text, and if you want to make changes on it, use CSS.
  * EX: <button>Cancel</button> ==> use CSS to make it [CANCEL].
* Cursor:
  * Use `cursor: pointer` for buttons.
* Inline styling:
  * Used for dynamic styling.
* Setting in the `body`: `font-family`, `line-height`, `padding`, `height`
  * Toasty Effect (sliding character):
    * in term of markup: 
      * wrapper: tracking
        * character: sliding

# Strategies for handling large screens (e.g., 2XL):

The approach depends on the page content:

1. If the page content looks ugly on large screens, set a maximum width and center it. (width: 100%; max-width: 2xl(1536px); margin-x: auto) or (w-full mx-auto 2xl:container)
2. If the content works well with large screens, allow it to span the entire width and apply an appropriate layout.
