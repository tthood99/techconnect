
import streamlit as st
import streamlit.components.v1 as components
import os

# Set page configuration for a better viewing experience
st.set_page_config(
    page_title="TechConnect OT",
    page_icon="♿",
    layout="wide",
    initial_sidebar_state="collapsed"
)

def main():
    # Path to the index.html file
    html_file_path = "index.html"
    
    if os.path.exists(html_file_path):
        with open(html_file_path, "r", encoding="utf-8") as f:
            html_content = f.read()
            
        # Inject the HTML content into the Streamlit app
        # We use a height that covers the viewport, or allow scrolling
        components.html(html_content, height=2000, scrolling=True)
    else:
        st.error("index.html not found. Please ensure the frontend files are in the same directory.")

if __name__ == "__main__":
    main()
