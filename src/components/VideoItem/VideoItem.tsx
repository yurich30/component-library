import React from 'react';
import styles from './VideoItem.module.css';

export interface IVideoItemProperties {
  video: any;
}

const VideoItem: React.FC<IVideoItemProperties> = ({ video }) => {
  return (
    <div className={styles.tiktuk}>
      <div className={styles.tiktuk__header}>
        <a href={`/user`}>
          <div className={styles.author__info}>
            <img
              src={video.authorMeta.avatar}
              alt="avatar"
              className={styles.tiktuk__avatar}
            />
            <div>
              <div className={styles.name}>{video.authorMeta.name}</div>
              <div>
                {video.musicMeta.musicName} - {video.musicMeta.musicAuthor}
              </div>
            </div>
          </div>
        </a>
        <button className={styles.follow__button}>Follow</button>
      </div>
      <div>
        <video
          controls
          src={video.videoUrl}
          autoPlay
          loop
          className={styles.tiktuk__video}
        />
        <div className="tiktuk__video-info">
          <div className="tiktuk__video-likes"></div>
          <div className="tiktuk__videos-comments"></div>
          <div className="tiktuk__videos-repost"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
