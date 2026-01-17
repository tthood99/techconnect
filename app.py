
import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(
    page_title="TechME",
    page_icon="♿",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Remove streamlit padding for a cleaner "app" feel
st.markdown("""
    <style>
        .reportview-container .main .block-container { padding-top: 0rem; padding-bottom: 0rem; padding-left: 0rem; padding-right: 0rem; }
        iframe { border: none; }
        #MainMenu { visibility: hidden; }
        footer { visibility: hidden; }
        header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

def main():
    html_file_path = "index.html"
    
    if os.path.exists(html_file_path):
        with open(html_file_path, "r", encoding="utf-8") as f:
            html_content = f.read()
            
        # We use height=1200 and scrolling=True to ensure visibility. 
        components.html(html_content, height=1200, scrolling=True)
    else:
        st.error("Frontend missing. Please ensure index.html exists in the same directory.")

if __name__ == "__main__":
    main()
